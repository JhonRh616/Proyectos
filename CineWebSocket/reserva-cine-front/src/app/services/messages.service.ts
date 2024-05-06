import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Mensaje } from "../model/mensaje.model";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  mensajes: Mensaje[] = [];

  constructor(private http: HttpClient) {}

  getMessages(): Mensaje[]{
    this.http.get<Mensaje[]>('http://localhost:8080/api/getMensajes').subscribe({
      next: (mensajes) => {
        // Iterar sobre cada mensaje en la lista
        mensajes.forEach((mensaje: Mensaje) => {
          // Agregar el mensaje a la lista de mensajes en el componente
          this.mensajes.push(mensaje);
        });
      },
      error: (error) => {
        console.error('Error al obtener los mensajes:', error);
      }
    });

    return this.mensajes;
  }
}