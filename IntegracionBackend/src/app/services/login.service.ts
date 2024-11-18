import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Url del API almacenada de forma privada
  apiUrl= "https://localhost:7260/api/Users";


  constructor(private http: HttpClient) { }

  loginn(lastname:string, email:string):Observable<any>{
    const body = { lastname, email };


    return this.http.post(`${this.apiUrl}/login`, body) 

  }

  register(name: string, lastname: string, email: string, tel: string,
    nameg: string, emaill:string,
    start: Date, end: Date, note: string): Observable<any> {
    const body = { name, lastname, email, tel, nameg, emaill,start, end, note };
    return this.http.post(`${this.apiUrl}/register`, body);
  }

}
