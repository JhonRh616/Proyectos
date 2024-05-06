import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Asientos } from "../model/asientos.model";
import { Observable } from "rxjs";
 
@Injectable({
  providedIn: 'root'
})
export class AsientosService {

  constructor(private http: HttpClient) {}

  getAsientos(idPelicula: number): Observable<Asientos[]> {
    return this.http.get<Asientos[]>('http://localhost:8080/api/getAsientos/' + idPelicula);
  }

}