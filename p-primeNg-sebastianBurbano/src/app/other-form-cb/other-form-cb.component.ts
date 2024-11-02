import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-other-form-cb',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,CheckboxModule, ButtonModule],
  templateUrl: './other-form-cb.component.html',
  styleUrl: './other-form-cb.component.css'
})
export class OtherFormCbComponent {

  checkboxForm: FormGroup;
  radiobuttonForm: FormGroup;
  opciones: {label:string; value: string}[]=[
    {label: 'opcion 1', value: 'opcion1'},
    {label: 'opcion 2', value: 'opcion2'},
    {label: 'opcion 3', value: 'opcion3'}
  ];

  opcionesrb: {label:string; value: string}[]=[
    { label: 'opcion A', value: 'opcionA'},
    { label: 'opcion B', value: 'opcionB'},
    { label: 'opcion C', value: 'opcionC'}
  ];
  constructor(private fb: FormBuilder){
    this.checkboxForm = this.fb.group({
      seleccion: [{}], // Inicia arreglo vacio
    }),
    this.radiobuttonForm = this.fb.group({
      seleccion: [''],
    })
  };

  onSubmit(){
    console.log(this.checkboxForm.value);
    console.log(this.radiobuttonForm.value);
  }
}
