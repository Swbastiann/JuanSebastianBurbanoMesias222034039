import { Component } from '@angular/core';
import { OtherFormCbComponent } from '../other-form-cb/other-form-cb.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OtherFormCbComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
