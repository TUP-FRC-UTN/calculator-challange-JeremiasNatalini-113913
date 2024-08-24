import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  valor1: number = 0;
  valor2: number = 0;
  @Output() resultado = new EventEmitter<number>();

  onInputChange(event: Event, valor: 'valor1' | 'valor2'): void {
    const inputElement = event.target as HTMLInputElement;
    if (valor === 'valor1') {
      this.valor1 = +inputElement.value; // Convertir el valor a número
    } else if (valor === 'valor2') {
      this.valor2 = +inputElement.value; // Convertir el valor a número
    }
  }

  realizarOperacion(operacion: string): void {
    let res: number;
    switch (operacion) {
      case 'suma':
        res = this.valor1 + this.valor2;
        break;
      case 'resta':
        res = this.valor1 - this.valor2;
        break;
      case 'multiplicacion':
        res = this.valor1 * this.valor2;
        break;
      case 'division':
        res = this.valor2 !== 0 ? this.valor1 / this.valor2 : NaN;
        break;
      case 'potencia':
        res = Math.pow(this.valor1, this.valor2);
        break;
      case 'raiz':
        res = Math.sqrt(this.valor1);
        break;
      case 'borrar':
        this.valor1 = 0;
        this.valor2 = 0;
        res = 0;
        break;
      default:
        res = NaN;
        break;
    }
    this.resultado.emit(res);
  }
}
