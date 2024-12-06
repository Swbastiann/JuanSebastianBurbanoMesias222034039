import { RegisterService } from '../../services/register.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-register-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CalendarModule, InputTextModule, ButtonModule],
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
      const libro = {
        Isbn: formData.isbn,
        Titulo: formData.title,
        Autor: formData.author,
        Editorial: formData.editorial,
        Genero: formData.genre,
        Cantidad: formData.quantity,
        Año_publicacion: new Date(formData.year, 0, 1).toISOString()
      };
  
      this.registerService.registerBook(libro).subscribe(response => {
        console.log("Exitoso", response);
        this.router.navigate(['/']); 
      }, error => {
        console.error("Error al registrar el libro:", error);
      });
  
      console.log('Formulario Enviado', libro);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  
}