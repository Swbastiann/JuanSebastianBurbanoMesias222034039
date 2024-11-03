import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton'
import { InputTextareaModule } from 'primeng/inputtextarea';


@Component({
  selector: 'app-other-form-cb',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxModule, ButtonModule,RadioButtonModule, InputTextareaModule],
  templateUrl: './other-form-cb.component.html',
  styleUrl: './other-form-cb.component.css'
})
export class OtherFormCbComponent {

  opciones: { label: string; value: string }[] = [
    { label: 'Opción 1', value: 'opcion1' },
    { label: 'Opción 2', value: 'opcion2' },
    { label: 'Opción 3', value: 'opcion3' },
  ];

  opcionesrb: { label: string; value: string }[] = [
    { label: 'Opción A', value: 'opcionA' },
    { label: 'Opción B', value: 'opcionB' },
    { label: 'Opción C', value: 'opcionC' },
  ];



  checkboxForm: FormGroup;
  radiobuttonForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.checkboxForm = this.fb.group({
      seleccion: [[]], // Inicializamos con un arreglo vacío
    
      


    });

    this.radiobuttonForm = this.fb.group({
      seleccion: [''], // Inicializamos con un string vacío
    });

  }

  onSubmit() {
    console.log(this.checkboxForm.value);
    console.log(this.radiobuttonForm.value);
  }



}
