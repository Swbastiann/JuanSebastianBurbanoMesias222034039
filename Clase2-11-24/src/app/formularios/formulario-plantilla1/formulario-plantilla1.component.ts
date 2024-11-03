import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario-plantilla1',
  standalone: true,
  imports: [InputTextModule, PasswordModule, FormsModule],
  templateUrl: './formulario-plantilla1.component.html',
  styleUrl: './formulario-plantilla1.component.css'
})
export class FormularioPlantilla1Component {
  value: string = ''; 
  user: string = '';







}
