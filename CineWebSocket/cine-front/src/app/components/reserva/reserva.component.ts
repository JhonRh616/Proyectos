import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageDto } from 'src/app/model/reserva.model';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.sass']
})
export class ReservaComponent implements OnInit {

  username: string = '';
  messageInput: string = '';
  messages: string[] = [];
  socket: WebSocket;

  ngOnInit(): void {
    this.getRecentMessages();
  }

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.socket = new WebSocket("ws://localhost:8080/chat");

    this.socket.onmessage = (event) => {
      // Asignar al arreglo de mensajes nada, para que no se dupliquen los mensajes de antes con los actuales
      this.messages = [];
      let receivedData = JSON.parse(event.data); // Parsear el JSON recibido
    
      // Verificar si receivedData es una lista
      if (Array.isArray(receivedData)) {
        // Iterar sobre cada mensaje en la lista
        receivedData.forEach((message: MessageDto) => {
          // Agregar el mensaje a la lista de mensajes en el componente
          this.messages.push(message.mensaje);
        });
      } else {
        // Si receivedData no es una lista, asumimos que es un único mensaje
        this.messages.push(receivedData.mensaje);
      }
    };
  }

  sendMessage() {
    let dtoToSend = { nombre: this.username, mensaje: this.messageInput }; // Crear el DTO con los datos del usuario
    this.socket.send(JSON.stringify(dtoToSend)); // Enviar el mensaje por el WebSocket
    this.messageInput = ''; // Limpiar el campo de entrada después de enviar el mensaje
  }

  getRecentMessages() {
    this.http.get<MessageDto[]>('http://localhost:8080/api/messages').subscribe({
      next: (messages) => {
        console.log("Listado De Mensajes: "+JSON.stringify(messages));
        // Iterar sobre cada mensaje en la lista
        messages.forEach((message: MessageDto) => {
          // Agregar el mensaje a la lista de mensajes en el componente
          this.messages.push(message.mensaje);
        });
      },
      error: (error) => {
        console.error('Error al obtener los mensajes:', error);
      }
    });
  }
}
