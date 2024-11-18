import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-loginn',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule, ButtonModule],
  templateUrl: './loginn.component.html',
  styleUrl: './loginn.component.css'
})
export class LoginnComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService:LoginService){     //constructor {}
    this.userForm = this.fb.group({    //metodo ()
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const {lastName, email} = this.userForm.value;
      this.loginService.loginn(lastName, email).subscribe(
        (response) => {
          console.log("Login Exitoso:", response);
          console.log("Login enviado correctamente");
        },
        (error) => {
          console.log("Error en Login:", error);
        }
      );
      console.log(this.userForm.value);
    } else {
      console.log('Login inválido');
    }
  }

}

