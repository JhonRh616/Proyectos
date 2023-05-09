import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  resultadoObtenido: number;
  textoResultado = "Resultado: ";

  calcularResultado(valor: number){
    this.resultadoObtenido = valor;
  }

}
