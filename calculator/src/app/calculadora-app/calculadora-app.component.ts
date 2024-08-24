import { Component } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-calculadora-app',
  standalone: true,
  imports: [CalculadoraComponent],
  templateUrl: './calculadora-app.component.html',
  styleUrls: ['./calculadora-app.component.css']
})
export class CalculadoraAppComponent {
  resultado: number | undefined;

  mostrarResultado(resultado: number): void {
    this.resultado = resultado;
  }
}
