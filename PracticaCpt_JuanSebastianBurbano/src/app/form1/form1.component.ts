import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService:LoginService){     //constructor {}
    this.userForm = this.fb.group({    //metodo ()
      name: ['', Validators.required],    //coleccion[]
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    });
  }

  ngOnInit() {
    this.userForm.valueChanges.subscribe(() => {
      if (this.userForm.valid) {
        this.onSubmit(); // Llama al submit automáticamente cuando el formulario es válido
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const { name, lastName, email, tel } = this.userForm.value;
      this.loginService.loginForm1(name, lastName, email, tel).subscribe(
        (response) => {
          console.log("Formulario 1 Exitoso:", response);
          console.log("Formulario 1 enviado correctamente");
        },
        (error) => {
          console.log("Error en formulario 1:", error);
        }
      );
      console.log(this.userForm.value);
    } else {
      console.log('Formulario 1 inválido');
    }
  }
}
