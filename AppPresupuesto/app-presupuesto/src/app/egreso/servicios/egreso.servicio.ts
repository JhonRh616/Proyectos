import { Injectable } from "@angular/core";
import { Egreso } from "../modelos/egreso.model";

@Injectable()
export class EgresoServicio{

  egresos: Egreso[]=[
    new Egreso("Arriendo Apartamento", 900),
    new Egreso("Ropa", 200)
  ];

  eliminarRegistro(egreso: Egreso){
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }
}