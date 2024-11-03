import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule, DropdownModule, InputTextModule, ButtonModule, CommonModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registroForm: FormGroup;

  //Arreglo de tipo clave valor
  generos: {label: string; value: string}[] =[
    {label: 'Masculino', value:'M'},
    {label: 'Femenino', value:'F'},
    {label: 'Otro', value:'other'}

  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }
    onSubmit() {
      if (this.registroForm.valid) {
        console.log('Formulario Enviado', this.registroForm.value);
        this.router.navigate(['/logintest']);
      } else {
        this.registroForm.markAllAsTouched();
      }
    }
  }

