import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrlBase = 'https://localhost:7048/api/libros';

  constructor(private http: HttpClient) {}

  // Método para registrar un libro (ya existente)
  registerBook(book: any): Observable<any> {
    return this.http.post(`${this.apiUrlBase}/Register`, book);
  }

  // Método para obtener un libro por ISBN
  obtenerPorISBN(isbn: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrlBase}/getByIsbn/${isbn}`);
  }

  // Método para actualizar un libro
  actualizarLibro(libro: any): Observable<any> {
    return this.http.put<void>(`${this.apiUrlBase}/update/${libro.isbn}`, libro);
  }

  eliminarLibro(isbn: string): Observable<any> {
    return this.http.delete(`${this.apiUrlBase}/delete/${isbn}`);
  }

  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlBase}/getBooks/`);
  }
  
}
