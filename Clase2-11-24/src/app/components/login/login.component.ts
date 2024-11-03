
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, ButtonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit { //OnInit cumple la tarea de ser una Interfaz: hereda valores
  myForm: FormGroup = null!; //null solo para inicializar la variable

  constructor(private fb: FormBuilder){



  } 

  //ngOnInit maneja de forma separada la inicializacion de valores, y mantiene limpio el constructor
  ngOnInit()  { 
    this.myForm = this.fb.group({
      usuario: [''],
      password: ['']


    });
  
  }
  onSubmit() {
    console.log(this.myForm.value); //este test permite visualizar en consola los valores ingresados
  }
}


//   loginForm = this.fb.group(
//     {
//     usuario: ['',  [Validators.required]],
//     password: ['' , [Validators.required]]
  
  
//     }

// );

 


