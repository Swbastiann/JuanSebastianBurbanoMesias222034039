import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormControlName,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { LoginService } from '../services/login.service';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [ReactiveFormsModule,
    CalendarModule,ButtonModule,CommonModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService:LoginService){     //constructor {}
    this.userForm = this.fb.group({    //metodo ()
      start: ['', Validators.required],    //coleccion[]
      end: ['', Validators.required],
      note: ['', Validators.maxLength(200)],
    });
  }


  onSubmit() {
    if (this.userForm.valid) {
      const { start, end, note } = this.userForm.value;
      this.loginService.loginForm3(start, end, note).subscribe(
        (response) => {
          console.log("Formulario 3 Exitoso:", response);
          console.log("Formulario 3 enviado correctamente"); 
        },
        (error) => {
          console.log("Error en formulario 3:", error);
        }
      );
    } else {
      console.log('Formulario 3 inválido');
    }
  }
}
