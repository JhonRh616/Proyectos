import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from './modelos/egreso.model';
import { EgresoServicio } from './servicios/egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  @Input() ingresoTotal: number;
  egresos: Egreso[] = [];

  constructor(private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarRegistro(egreso: Egreso){
    this.egresoServicio.eliminarRegistro(egreso);
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
