import { Component, Input } from '@angular/core';
import { Asientos } from 'src/app/model/asientos.model';
import { ReservaPelicula } from 'src/app/model/reserva.model';
import { AsientosService } from 'src/app/services/asientos.service';

@Component({
  selector: 'app-movie-slot',
  templateUrl: './movie-slot.component.html',
  styleUrls: ['./movie-slot.component.sass']
})
export class MovieSlotComponent {

  @Input() movieImage: string = '';
  @Input() movieAlt: string = '';
  @Input() movieId: number = 0;
  @Input() nombre: string = '';

  asientosPorPelicula: { [movieId: number]: Asientos[] } = {};
  socket: WebSocket;
  
  ngOnInit() {
    this.getAsientosForPelicula(this.movieId);
  }

  constructor(private asientosService: AsientosService) {
    this.socket = new WebSocket("ws://localhost:8080/cine");

    this.socket.onmessage = (event) => {     
      let receivedData = JSON.parse(event.data); // Parsear el JSON recibido
      this.asientosPorPelicula[receivedData.idPelicula] = receivedData.asientos;
    };
  }

  selectSeat(movieId: number, seatId: number) {
    console.log("Se reservó la silla " + seatId + " de la película " + this.movieAlt);
    const dtoToSend: ReservaPelicula = new ReservaPelicula(1, this.nombre, movieId, seatId);
    this.socket.send(JSON.stringify(dtoToSend)); // Enviar el mensaje por el WebSocket
  }

  getAsientosForPelicula(movieId: number) {
    this.asientosService.getAsientos(movieId).subscribe((asientos: Asientos[]) => {
      this.asientosPorPelicula[movieId] = asientos; // Almacena los asientos en el objeto
    });
  }
}
