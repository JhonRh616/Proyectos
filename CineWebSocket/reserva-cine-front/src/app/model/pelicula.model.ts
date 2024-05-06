export class Pelicula {
  id: number;
  nombrePelicula: string;
  assetPelicula: string;
  reservada: boolean;

  constructor(id: number, nombrePelicula: string, assetPelicula: string, reservada: boolean) {
    this.id = id;
    this.nombrePelicula = nombrePelicula;
    this.assetPelicula = assetPelicula;
    this.reservada = reservada;
  }
}
