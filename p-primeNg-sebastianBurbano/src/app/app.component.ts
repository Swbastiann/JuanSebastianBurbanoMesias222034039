import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormularioPlantilla1Component } from './formularios/formulario-plantilla1/formulario-plantilla1.component';
import { LoginComponent } from './components/login/login.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { OtherFormComponent } from './other-form/other-form.component';
import { OtherFormCbComponent } from './other-form-cb/other-form-cb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, FormularioPlantilla1Component, LoginComponent, LoginTestComponent, OtherFormComponent, OtherFormCbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p-primeNg-sebastianBurbano';
}
