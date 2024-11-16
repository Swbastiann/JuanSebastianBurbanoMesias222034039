import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormControlName,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [ReactiveFormsModule,
    CalendarModule,ButtonModule,CommonModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder){     //constructor {}
    this.userForm = this.fb.group({    //metodo ()
      start: ['', Validators.required],    //coleccion[]
      end: ['', Validators.required],
      note: ['', Validators.maxLength(200)],
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
