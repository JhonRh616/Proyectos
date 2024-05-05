import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket: WebSocketSubject<any> | undefined;

  constructor() {
    this.socket = undefined;
  }

  connectWebSocket(): void {
    this.socket = webSocket('ws://localhost:8080/chat');
  }

  sendMessage(message: string): void {
    if (this.socket) {
      this.socket.next(message);
    } else {
      console.error('Socket no inicializado');
    }
  }

  getMessages(): Observable<any> | null {
    return this.socket ? this.socket.asObservable() : null;
  }
}