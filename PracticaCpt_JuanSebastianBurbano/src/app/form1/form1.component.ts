import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputTextModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder){     //constructor {}
    this.userForm = this.fb.group({    //metodo ()
      name: ['', Validators.required],    //coleccion[]
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      const { name, lastname, email, tel } = this.userForm.value;
      console.log("Datos del Form enviados correctamente:", { name, lastname, email, tel });
    } else {
      console.log('Formulario inválido');
    }
  }
}
