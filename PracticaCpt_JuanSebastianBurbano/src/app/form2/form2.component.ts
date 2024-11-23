import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder){   
    this.userForm = this.fb.group({    
      nameg: ['', Validators.required],   
      emaill: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      const { nameg, emaill } = this.userForm.value;
      console.log("Datos del Form enviados correctamente:", { nameg, emaill });
    } else {
      console.log('Formulario inválido');
    }
  }
}
