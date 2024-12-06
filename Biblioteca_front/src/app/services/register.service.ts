import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl = 'https://localhost:7073/api/libros/Register';

  constructor(private http: HttpClient) {}

  registerBook(book: any): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }
  
}
