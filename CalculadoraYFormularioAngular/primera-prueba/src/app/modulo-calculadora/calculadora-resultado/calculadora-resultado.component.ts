import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora-resultado',
  templateUrl: './calculadora-resultado.component.html',
  styleUrls: ['./calculadora-resultado.component.css']
})
export class CalculadoraResultadoComponent {

  @Input() resultado: number;
  textoResultado = "Resultado: ";

}
