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
        private readonly string _connectionString = "Server=LAPTOP-LFA03L5H\\MSSQLSERVER01;Database=Biblioteca;User Id=sa;Password=12345678;TrustServerCertificate=true";

        //Registrar
        [HttpPost("Register")]
        public IActionResult Register([FromBody] Libros libro)
        {
            if (libro == null)
            {
                return BadRequest(new { status = "error", message = "Invalid data." });
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                // Verifica si el libro ya está registrado
                var sqlCheckBook = "SELECT COUNT(*) FROM Libros WHERE isbn = @Isbn";
                var bookExists = connection.ExecuteScalar<int>(sqlCheckBook, new { libro.Isbn }) > 0;

                if (bookExists)
                {
                    return BadRequest(new { status = "error", message = "Book is already registered." });
                }

                // Si el libro no existe, se inserta en la base de datos
                var sql = "INSERT INTO Libros (isbn, titulo, autor, editorial, genero, cantidad, año_publicacion) VALUES (@Isbn, @Titulo, @Autor, @Editorial, @Genero, @Cantidad, @Año_publicacion)";
                var result = connection.Execute(sql, new { libro.Isbn, libro.Titulo, libro.Autor, libro.Editorial, libro.Genero, libro.Cantidad, libro.Año_publicacion });
                if (result > 0)
                {
                    return Ok(new { status = "success", message = "Book registered successfully." });
                }
                else
                {
                    return StatusCode(500, new { status = "error", message = "Error registering book." });
                }
            }
        }

        //Eliminar
        [HttpDelete("delete/{isbn}")]
        public IActionResult Delete(string isbn)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "DELETE FROM Libros WHERE isbn = @Isbn";
                var rowsAffected = connection.Execute(sql, new { Isbn = isbn });

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
                    var sql = "SELECT * FROM Libros WHERE isbn = @Isbn";
                    var libro = connection.QuerySingleOrDefault<Libros>(sql, new { Isbn = isbn });

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

        //Actualizar informacion del libro
        [HttpPut("update/{isbn}")]
        public IActionResult Update(string isbn, [FromBody] Libros libro)
        {
            if (libro == null)
            {
                return BadRequest(new { status = "error", message = "Invalid data." });
            }
            using (var connection = new SqlConnection(_connectionString))
            {
                //Verificar si el libro existe
                var sql = "SELECT COUNT(*) FROM Libros WHERE isbn = @Isbn";
                var bookExists = connection.ExecuteScalar<int>(sql, new { Isbn = isbn }) > 0;

                if (!bookExists)
                {
                    return NotFound(new { status = "error", message = "Book not found." });
                }
                //Actualizar
                var sqlUpdate = @"UPDATE Libros SET titulo = @Titulo, autor = @Autor, editorial = @Editorial, genero = @Genero, 
                                año_publicacion = @Año_publicacion WHERE isbn = @Isbn";
                var rowsAffected = connection.Execute(sqlUpdate, new { Isbn = isbn, libro.Titulo, libro.Autor, libro.Editorial, libro.Genero, libro.Año_publicacion });

                if (rowsAffected > 0)
                {
                    return Ok(new { status = "success", message = "Book updated successfully." });
                }
                else
                {
                    return StatusCode(500, new { status = "error", message = "Error updating book." });
                }
            }
        }

        // Actualizar cantidad
        [HttpPatch("updateQuantity/{isbn}")]
        public IActionResult UpdateQuantity(string isbn, [FromBody] int ajuste)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                // Verifica si el libro existe
                var sql = "SELECT COUNT(*) FROM Libros WHERE isbn = @Isbn";
                var bookExists = connection.ExecuteScalar<int>(sql, new { Isbn = isbn }) > 0;

                if (!bookExists)
                {
                    return NotFound(new { status = "error", message = "Book not found." });
                }
                // Cantidad actual del libro
                var sqlQuantity = "SELECT cantidad FROM Libros WHERE isbn = @Isbn";
                var currentQuantity = connection.ExecuteScalar<int>(sqlQuantity, new { Isbn = isbn });
                var newQuantity = currentQuantity + ajuste;


                // Verifica que la nueva cantidad no sea negativa
                if (newQuantity < 0)
                {
                    return BadRequest(new { status = "error", message = "Quantity cannot be negative." });
                }

                // Actualiza la cantidad en la base de datos
                var sqlUpdate = "UPDATE Libros SET cantidad = @NewQuantity WHERE isbn = @Isbn";
                var rowsAffected = connection.Execute(sqlUpdate, new { NewQuantity = newQuantity, Isbn = isbn });

                if (rowsAffected > 0)
                {
                    return Ok(new { status = "success", message = "Quantity updated successfully.", newQuantity });
                }
                else
                {
                    return StatusCode(500, new { status = "error", message = "Error updating quantity." });
                }
            }
        }
    }
}
