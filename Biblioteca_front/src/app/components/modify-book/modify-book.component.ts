import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-modify-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modify-book.component.html',
  styleUrls: ['./modify-book.component.css']
})
export class ModifyBookComponent {
  buscarForm: FormGroup; // Formulario para buscar por ISBN
  modificarForm: FormGroup; // Formulario para modificar libro
  libroEncontrado: boolean = false; // Bandera para mostrar el formulario de edición
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

    // Inicializa el formulario para modificar libro
    this.modificarForm = this.fb.group({
      Titulo: ['', Validators.required],
      Autor: ['', Validators.required],
      Editorial: ['', Validators.required],
      Genero: ['', Validators.required],
      Cantidad: [0, [Validators.required, Validators.min(1)]],
      Año_publicacion: ['', Validators.required]
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
          // Llena el formulario con los datos del libro
          this.modificarForm.patchValue({
            Titulo: libro.titulo,
            Autor: libro.autor,
            Editorial: libro.editorial,
            Genero: libro.genero,
            Cantidad: libro.cantidad,
            Año_publicacion: new Date(libro.año_publicacion).getFullYear().toString() // Convierte a formato de año
          });
        },
        error: () => {
          this.libroEncontrado = false;
          this.mensajeError = 'No se encontró un libro con este ISBN.';
        }
      });
    }
  }

  // Método para enviar los cambios del formulario
  onSubmit() {
    if (this.modificarForm.valid) {
      const formData = { ...this.modificarForm.value, isbn: this.buscarForm.value.isbn };
      console.log('Datos del formulario antes de enviar:', formData);
      // Asegurarse de que 'year' sea un número y válido antes de convertirlo
      const year = formData.Año_publicacion;
      if (year && !isNaN(Number(year))) {
        formData.Año_publicacion = new Date(Number(year), 0, 1).toISOString(); // Convierte el año a formato ISO 8601
      } else {
        alert('Por favor, ingrese un año válido.');
        return;
      }
  
      this.registerService.actualizarLibro(formData).subscribe({
        next: () => {
          alert('Libro modificado con éxito.');
          this.router.navigate(['/']); // Redirige a la página principal o la deseada
        },
        error: (err) => {
          console.error('Error al modificar el libro:', err);
          alert('No se pudo modificar el libro.');
        }
      });
    } else {
      this.modificarForm.markAllAsTouched();
    }
  }
  
}
