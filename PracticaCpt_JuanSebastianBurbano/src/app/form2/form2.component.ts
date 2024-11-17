import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../services/login.service';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService:LoginService){     //constructor {}
    this.userForm = this.fb.group({    //metodo ()
      nameg: ['', Validators.required],    //coleccion[]
      emaill: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.userForm.valueChanges.subscribe(() => {
      if (this.userForm.valid) {
        this.onSubmit(); // Llama al submit automáticamente cuando el formulario es válido
      }
    });
  }


//Nota: hay que pegar el correo directamente, porque despues de 
//poner el @ con un caracter se regresa al Api tomandolo como un 
//correo valido. Obviamente va estar incorrecto de esta forma.
  onSubmit() {
    if (this.userForm.valid) {
      const { nameg, emaill } = this.userForm.value;
      this.loginService.loginForm2(nameg, emaill).subscribe(
        (response) => {
          console.log("Formulario 2 Exitoso:", response);
          console.log("Formulario 2 enviado correctamente"); 
        },
        (error) => {
          console.log("Error en formulario 2:", error);
        }
      );
    } else {
      console.log('Formulario 2 inválido');
    }
  }
}
