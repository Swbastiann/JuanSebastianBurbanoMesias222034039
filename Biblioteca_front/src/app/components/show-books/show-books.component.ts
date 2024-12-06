import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-show-books',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {
  books: any[] = []; // Arreglo para almacenar los libros
  errorMessage: string = ''; // Para mostrar mensaje de error si algo falla

  constructor(private showBooksService: RegisterService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks(); // Cargar los libros cuando se inicializa el componente
  }
  
  loadBooks(): void {
    this.showBooksService.getAllBooks().subscribe({
      next: (data) => {
        this.books = data.map(book => {
          book.anio_publicacion = book.año_publicacion;  // Mapea 'año_publicacion' a 'anio_publicacion'
          return book;
        });
      },
      error: (err) => {
        this.errorMessage = 'No se pudieron cargar los libros. Intente nuevamente.';
        console.error('Error loading books:', err); // Para depurar el error
      }
    });
  }
  
}
