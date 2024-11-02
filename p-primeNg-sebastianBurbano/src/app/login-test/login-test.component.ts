import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-test',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,
    PasswordModule, CommonModule],
  templateUrl: './login-test.component.html',
  styleUrl: './login-test.component.css'
})
export class LoginTestComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder){     //constructor {}
    this.userForm = this.fb.group({    //metodo ()
      name: ['', Validators.required],    //coleccion[]
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }else{
        console.log('Formulario invalido');
      }
  }
}

