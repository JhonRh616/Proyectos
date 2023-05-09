import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora-formulario',
  templateUrl: './calculadora-formulario.component.html',
  styleUrls: ['./calculadora-formulario.component.css']
})
export class CalculadoraFormularioComponent {

  numero1: number;
  numero2: number;

  @Output() resultadoSuma = new EventEmitter<number>();

  deshabilitado = false;
  titulo="Mi nueva calculadora";
  tituloCalculadora="Este es el título para calculadora";

  sumar(): void{
    let resultado: number = this.numero1+this.numero2;
    this.resultadoSuma.emit(resultado);
  }

}
