using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Linq;

namespace Api_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly string _connectionString = "Server=LAPTOP-LFA03L5H\\MSSQLSERVER01;Database=integracion_backend;User Id=sa;Password=12345678;TrustServerCertificate=true";

        // Endpoint para el login
        [HttpPost("login")]
        public IActionResult Login([FromBody] Loginn data)
        {
            // Verificar que los datos no sean nulos
            if (data == null)
            {
                return BadRequest(new { status = "error", message = "Invalid data for login." });
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                // Query para buscar al usuario en la base de datos
                var sql = "SELECT * FROM Users WHERE Apellido = @Lastname AND Correo = @Email";
                var result = connection.QuerySingleOrDefault<Loginn>(sql, new { data.Lastname, data.Email });

                // Si el usuario existe, devolver éxito
                if (result != null)
                {

                    return Ok(new { status = "success", message = "Login processed successfully.", data });
                }
                else
                {
                    return Unauthorized(new { status = "error", message = "Invalid credentials for login." });
                }
            }
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterData1 data)
        {
            if (data == null)
            {
                return BadRequest(new { status = "error", message = "Invalid registration data." });
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                // Verifica si el correo ya está registrado
                var sqlCheckEmail = "SELECT COUNT(*) FROM Users WHERE Correo = @Email";
                var emailExists = connection.ExecuteScalar<int>(sqlCheckEmail, new { data.Email }) > 0;

                if (emailExists)
                {
                    return BadRequest(new { status = "error", message = "Email is already registered." });
                }

                // Si el correo no existe, inserta el nuevo usuario
                var sql = "INSERT INTO Users (nombre, apellido, correo, telefono, gerente, correo_gerente, fecha_inicio, fecha_fin, notas) VALUES (@Name, @Lastname, @Email, @Tel, @Nameg, @Emaill, @Start, @End, @Note)";
                var result = connection.Execute(sql, new { data.Name, data.Lastname, data.Email, data.Tel, data.Nameg, data.Emaill, data.Start, data.End, data.Note });

                if (result > 0)
                {
                    return Ok(new { status = "success", message = "User registered successfully." });
                }
                else
                {
                    return StatusCode(500, new { status = "error", message = "Error registering user." });
                }
            }
        }
    }
}


