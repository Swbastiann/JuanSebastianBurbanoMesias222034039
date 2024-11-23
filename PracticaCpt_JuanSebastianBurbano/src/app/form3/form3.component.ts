import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,InputTextModule, ButtonModule, CalendarModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder){   
    this.userForm = this.fb.group({    
      start: ['', Validators.required],
      end: ['', Validators.required],
      note: ['', Validators.maxLength(200)]
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      const { start, end, note } = this.userForm.value;
      console.log("Datos del Form enviados correctamente:", { start, end, note });
    } else {
      console.log('Formulario inválido');
    }
  }
}
