import { RegisterService } from '../../services/register.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  


@Component({
  selector: 'app-register-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-book.component.html',
  styleUrl: './register-book.component.css'
})

export class RegisterBookComponent {
  registerForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router,private registerService: RegisterService) {
    this.registerForm = this.fb.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      editorial: ['', Validators.required],
      genre: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      year: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const year = formData.year;
      formData.year = new Date(year, 0, 1).toISOString(); // Convierte el año a formato ISO 8601
  
      this.registerService.registerBook(formData).subscribe(response => {
        console.log("Exitoso", response);
      });
      console.log('Formulario Enviado', formData);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  
  
  
  
}