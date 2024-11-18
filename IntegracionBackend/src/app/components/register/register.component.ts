import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormfinalComponent } from "./formfinal/formfinal.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormfinalComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
