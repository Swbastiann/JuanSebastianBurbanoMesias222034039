import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Url del API almacenada de forma privada
  apiUrl= "https://localhost:7200/api/Users";

  constructor(private http: HttpClient) { }

  // Observable es un objeto que representa un flujo de datos que se pueden manejar 
  // de forma asíncrona. Los Observables son parte de la biblioteca RxJS (Reactive Extensions for JavaScript) 
  // y se utilizan principalmente para manejar eventos o flujos de datos que pueden ocurrir en el futuro, 
  // como respuestas de peticiones HTTP, eventos del usuario - se controla con HttpClientModule

  login(username: string, password:string):Observable<any>{
    const body = { username, password };
    //return this.http.post(this.apiUrl, {username, password});

    return this.http.post(`${this.apiUrl}/login`, {username, password}) // el /login es el metodo del EndPoint

  }

  register(username: string, password: string):Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.apiUrl}/register`, { username, password }) // el /register es el metodo del EndPoint
  }
    
}
