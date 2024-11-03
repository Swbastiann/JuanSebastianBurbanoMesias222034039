import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormularioPlantilla1Component } from './formularios/formulario-plantilla1/formulario-plantilla1.component';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginTestComponent } from './components/login-test/login-test.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioPlantilla1Component, 
    ButtonModule, LoginComponent, ReactiveFormsModule, LoginTestComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p-JorgeCollazos';
  
}
