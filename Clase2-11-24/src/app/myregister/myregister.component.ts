import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-myregister',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule, PasswordModule,CommonModule,ButtonModule, HttpClientModule],
  templateUrl: './myregister.component.html',
  styleUrl: './myregister.component.css'
})
export class MyregisterComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService){
    this.registroForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit():void{
    if(this.registroForm.valid){
      const { username, password } = this.registroForm.value;
      this.loginService.register(username, password).subscribe({
        next: response => {
          console.log('Usuario registrado exitosamente', response);
        },
        error: error => {
          console.error('Error en el registro del usuario', error);
        },
        complete: () => {
          console.log ('Proceso de registro completado');
        }

      });
    }
  }


}
