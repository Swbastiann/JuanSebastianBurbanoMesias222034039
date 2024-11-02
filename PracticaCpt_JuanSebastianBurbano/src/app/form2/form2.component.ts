import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder){     //constructor {}
    this.userForm = this.fb.group({    //metodo ()
      nameg: ['', Validators.required],    //coleccion[]
      email: ['', [Validators.required, Validators.email]],
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
