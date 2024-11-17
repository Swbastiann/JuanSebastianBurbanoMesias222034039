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

  loginForm1(name: string, lastname:string, email:string, tel:string):Observable<any>{
    const body = { name, lastname, email, tel};


    return this.http.post(`${this.apiUrl}/login/form1`, body) 

  }

  loginForm2(nameg: string, emaill:string):Observable<any>{
    const body = { nameg, emaill};


    return this.http.post(`${this.apiUrl}/login/form2`, body) 

  }

  loginForm3(start: Date, end:Date, note:string):Observable<any>{
    
    const body = { start, end, note };
    return this.http.post(`${this.apiUrl}/login/form3`, body);

  }
}
