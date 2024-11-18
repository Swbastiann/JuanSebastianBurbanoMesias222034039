import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormControlName,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { LoginService } from '../../../services/login.service';
import {  HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-formfinal',
  standalone: true,
  imports: [ReactiveFormsModule,
    CalendarModule,ButtonModule,CommonModule, InputTextModule],
  templateUrl: './formfinal.component.html',
  styleUrl: './formfinal.component.css'
})
export class FormfinalComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService:LoginService){     //constructor {}
    this.userForm = this.fb.group({    //metodo ()
      name: ['', Validators.required],    //coleccion[]
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      nameg: ['', Validators.required],    //coleccion[]
      emaill: ['', [Validators.required, Validators.email]],
      start: ['', Validators.required],    //coleccion[]
      end: ['', Validators.required],
      note: ['', Validators.maxLength(200)],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const { name, lastname, email, tel, nameg, emaill, start, end, note } = this.userForm.value;
      this.loginService.register(name,lastname, email, tel, nameg, emaill, start, end, note).subscribe(
        response => {
          console.log("Datos del Form enviados correctamente:", response);
        },
        error => {
          console.error("Error al enviar Form:", error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }
}
