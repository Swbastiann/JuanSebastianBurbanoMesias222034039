import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service'; // Ajusta la ruta si es necesario
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
  buscarForm: FormGroup; // Formulario para buscar por ISBN
  libro: any = {}; // Objeto para almacenar la información del libro
  libroEncontrado: boolean = false; // Bandera para mostrar el formulario de eliminación
  mensajeError: string = ''; // Mensaje de error si el libro no existe

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {
    // Inicializa el formulario para buscar por ISBN
    this.buscarForm = this.fb.group({
      isbn: ['', Validators.required]
    });
  }

  // Método para verificar libro por ISBN
  verificarLibro() {
    if (this.buscarForm.valid) {
      const isbn = this.buscarForm.value.isbn;

      this.registerService.obtenerPorISBN(isbn).subscribe({
        next: (libro) => {
          this.libroEncontrado = true;
          this.mensajeError = '';
          this.libro = libro; // Asignar la información del libro
        },
        error: () => {
          this.libroEncontrado = false;
          this.mensajeError = 'No se encontró un libro con este ISBN.';
        }
      });
    }
  }

  // Método para eliminar el libro
  eliminarLibro() {
    const isbn = this.buscarForm.value.isbn;

    this.registerService.eliminarLibro(isbn).subscribe({
      next: () => {
        alert('Libro eliminado con éxito.');
        this.router.navigate(['/']); // Redirige a la página principal o la deseada
      },
      error: (err) => {
        console.error('Error al eliminar el libro:', err);
        alert('No se pudo eliminar el libro.');
      }
    });
  }
}
