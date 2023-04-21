import { Injectable } from "@angular/core";
import { Ingreso } from "../modelos/ingreso.model";

@Injectable()
export class IngresoServicio{

  ingresos: Ingreso[]=[
    new Ingreso("Salario", 4000),
    new Ingreso("Venta Carro", 500)
  ];

  eliminarRegistro(ingreso: Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }
}