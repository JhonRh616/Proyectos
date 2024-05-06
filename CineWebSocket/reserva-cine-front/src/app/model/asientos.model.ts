export class Asientos {
  id: number;
  numeroAsiento: number;
  idPelicula: number;
  asientoReservado: boolean;

  constructor(id: number, numeroAsiento: number, idPelicula: number, asientoReservado: boolean) {
    this.id = id;
    this.numeroAsiento = numeroAsiento;
    this.idPelicula = idPelicula;
    this.asientoReservado = asientoReservado;
  }
}
