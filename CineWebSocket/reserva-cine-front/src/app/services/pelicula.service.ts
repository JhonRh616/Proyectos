import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pelicula } from "../model/pelicula.model";

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  peliculas: Pelicula[] = [];

  constructor(private http: HttpClient) {}

  getMovies(): Pelicula[]{
    this.http.get<Pelicula[]>('http://localhost:8080/api/getPeliculas').subscribe({
      next: (peliculas) => {
        // Iterar sobre cada mensaje en la lista
        peliculas.forEach((pelicula: Pelicula) => {
          // Agregar el mensaje a la lista de mensajes en el componente
          this.peliculas.push(pelicula);
        });
      },
      error: (error) => {
        console.error('Error al obtener las peliculas:', error);
      }
    });

    return this.peliculas;
  }
}