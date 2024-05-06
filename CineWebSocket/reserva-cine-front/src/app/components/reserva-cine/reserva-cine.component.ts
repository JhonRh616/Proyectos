import { Component } from '@angular/core';
import { Mensaje } from 'src/app/model/mensaje.model';
import { Pelicula } from 'src/app/model/pelicula.model';
import { MessagesService } from 'src/app/services/messages.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-reserva-cine',
  templateUrl: './reserva-cine.component.html',
  styleUrls: ['./reserva-cine.component.sass']
})
export class ReservaCineComponent {

  socket: WebSocket;
  username: string = '';
  messages: Mensaje[] = [];

  peliculas: Pelicula[] = [];

  ngOnInit() {
    this.peliculas = this.peliculaService.getMovies();
    this.messages = this.messagesService.getMessages();
  }

  constructor(private peliculaService: PeliculaService, private messagesService: MessagesService) {
    this.socket = new WebSocket("ws://localhost:8080/cine");    

    this.socket.onmessage = (event) => {   
      this.messages = [];
      let receivedData = JSON.parse(event.data); // Parsear el JSON recibido
      this.messages = receivedData.mensajes; //Asignar el listado de mensajes
    };
  }

}
