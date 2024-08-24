import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraAppComponent } from './calculadora-app/calculadora-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculadoraAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
}
