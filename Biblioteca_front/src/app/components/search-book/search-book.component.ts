import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service'; // Ajusta la ruta si es necesario
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  buscarForm: FormGroup; // Formulario para buscar por ISBN
  libroEncontrado: boolean = false; // Bandera para mostrar la información del libro
  mensajeError: string = ''; // Mensaje de error si el libro no existe
  libro: any; // Para almacenar la información del libro encontrado

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
          
          // Asignar el valor de 'año_publicacion' a 'anio_publicacion' para evitar el error
          this.libro = { ...libro };  // Crear una copia del objeto libro
          this.libro.anio_publicacion = this.libro.año_publicacion ? new Date(this.libro.año_publicacion).getFullYear().toString() : ''; 
          delete this.libro.año_publicacion; // Eliminar el campo con 'ñ'
          
        },
        error: () => {
          this.libroEncontrado = false;
          this.mensajeError = 'No se encontró un libro con este ISBN.';
        }
      });
    }
  }
  
}
