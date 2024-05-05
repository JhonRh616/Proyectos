import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor(private socket: Socket) { }

  conectarWebSocket() {
    this.socket.connect();
  }

  enviarReserva(reserva: any) {
    this.socket.emit('crear-reserva', reserva); // Envía el mensaje por WebSocket
  }

  // Método para suscribirse a un tema específico y devolver un Observable
  suscribirATopic(topic: string): Observable<any> {
    return this.socket.fromEvent(topic);
  }
}

