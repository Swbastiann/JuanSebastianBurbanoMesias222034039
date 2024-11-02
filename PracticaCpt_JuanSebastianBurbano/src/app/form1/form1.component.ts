import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder){     //constructor {}
    this.userForm = this.fb.group({    //metodo ()
      name: ['', Validators.required],    //coleccion[]
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
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
