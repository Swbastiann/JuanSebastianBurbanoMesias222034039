import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Form1Component } from "./form1/form1.component";
import { Form2Component } from "./form2/form2.component";
import { Form3Component } from "./form3/form3.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, Form1Component, Form2Component, Form3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicaCpt_JuanSebastianBurbano';
}
