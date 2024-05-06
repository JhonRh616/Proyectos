export class ReservaPelicula {
  id: number;
  nombreUsuario: string;
  idPelicula: number;
  idAsiento: number;

  constructor(id: number, nombreUsuario: string, idPelicula: number, idAsiento: number) {
    this.id = id;
    this.nombreUsuario = nombreUsuario;
    this.idPelicula = idPelicula;
    this.idAsiento = idAsiento;
  }
}
