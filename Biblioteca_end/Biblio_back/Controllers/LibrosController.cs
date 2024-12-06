using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Biblioteca_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibrosController : ControllerBase
    {
        private readonly string _connectionString = "Server=MG3\\MSSQLSERVER1;Database=Biblioteca;User Id=sa;Password=12345678;TrustServerCertificate=true";

        //Registrar
        [HttpPost("Register")]
        public IActionResult Register([FromBody] Libros libro)
        {
            try
            {
                if (libro == null)
                {
                    return BadRequest(new { status = "error", message = "Invalid data. No data received." });
                }

                using (var connection = new SqlConnection(_connectionString))
                {
                    // Verifica si el libro ya está registrado
                    var sqlCheckBook = "SELECT COUNT(*) FROM Libros WHERE isbn = @isbn";
                    var bookExists = connection.ExecuteScalar<int>(sqlCheckBook, new { libro.isbn }) > 0;

                    if (bookExists)
                    {
                        return BadRequest(new { status = "error", message = "Book is already registered." });
                    }

                    // Inserta el libro en la base de datos
                    var sql = "INSERT INTO Libros (isbn, titulo, autor, editorial, genero, cantidad, año_publicacion) VALUES (@isbn, @title, @author, @editorial, @genre, @quantity, @year)";
                    var result = connection.Execute(sql, new { libro.isbn, libro.title, libro.author, libro.editorial, libro.genre, libro.quantity, libro.year });

                    if (result > 0)
                    {
                        return Ok(new { status = "success", message = "Book registered successfully." });
                    }
                    else
                    {
                        return StatusCode(500, new { status = "error", message = "Error registering book. Data was not saved." });
                    }
                }
            }
            catch (Exception ex)
            {
                // Registra el error para diagnóstico
                return StatusCode(500, new { status = "error", message = "Internal server error", details = ex.Message });
            }
        }

        //Eliminar
        [HttpDelete("delete/{isbn}")]
        public IActionResult Delete(string isbn)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "DELETE FROM Libros WHERE isbn = @isbn";
                var rowsAffected = connection.Execute(sql, new { isbn });

                if (rowsAffected > 0)
                {
                    return Ok("Book deleted successfully.");
                }
                else
                {
                    return NotFound("Book not found.");
                }
            }
        }

        //Obtener todos los libros
        [HttpGet("getBooks")]
        public IActionResult GetBooks()
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    //consulta SQL
                    var sql = "SELECT * FROM Libros ORDER BY genero";
                    var libros = connection.Query<Libros>(sql).ToList();

                    if (libros == null || libros.Count == 0)
                    {
                        return NotFound("No books found.");
                    }

                    return Ok(libros);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        //Obtener informacion de un libro por ISBN
        [HttpGet("getByIsbn/{isbn}")]
        public IActionResult GetByIsbn(string isbn)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    // Consulta SQL para obtener el libro
                    var sql = "SELECT * FROM Libros WHERE isbn = @isbn";
                    var libro = connection.QuerySingleOrDefault<Libros>(sql, new { isbn });

                    if (libro == null)
                    {
                        return NotFound($"Book with ISBN {isbn} not found.");
                    }
                    return Ok(libro);
                }
            }
            catch (Exception ex)
            {
                // Si hay un error, devolvemos un mensaje de error
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
