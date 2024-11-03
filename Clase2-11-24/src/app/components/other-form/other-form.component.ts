import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'app-other-form',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, CalendarModule, ButtonModule, CommonModule],
  templateUrl: './other-form.component.html',
  styleUrl: './other-form.component.css'
})
export class OtherFormComponent {
  otherForm: FormGroup;

  cities: any[] = [{label: 'New York', value: 'NY'}, {label: 'London', value: 'LDN'}, {label: 'Paris', value: 'PRS'}];
  constructor(private fb: FormBuilder, private router: Router) {
    this.otherForm = this.fb.group({
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      city: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.otherForm.valid) {
      console.log(this.otherForm.value);
      this.router.navigate(['/logintest']); //Habilita la navegacion, debe activarse en el constructor
    } else {
      console.log('Formulario no valido');
    }
  }


}
