export class MessageDto {
  nombre: string;
  mensaje: string;

  constructor(nombre: string, mensaje: string) {
    this.nombre = nombre;
    this.mensaje = mensaje;
  }
}
