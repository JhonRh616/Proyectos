import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/servicios/ingreso.servicio';
import { EgresoServicio } from '../egreso/servicios/egreso.servicio';
import { Ingreso } from '../ingreso/modelos/ingreso.model';
import { Egreso } from '../egreso/modelos/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = 'ingreso';
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(event){
    this.tipo = event.target.value;
  }

  agregarValor(){
    if(this.tipo === 'ingreso')
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
  }

}
