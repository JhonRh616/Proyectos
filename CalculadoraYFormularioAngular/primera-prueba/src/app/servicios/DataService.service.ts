import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from '../modulo-personas/persona/persona.model';
import { LogginService } from './LogginService.service';

@Injectable()
export class DataServices{

  constructor(private httpClient: HttpClient, private loginService: LogginService){}

  guardarPersonas(personas: Persona[]){
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://listado-personas-angular-d7fc3-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas)
    .subscribe({
      next: (response) => console.log('Información añadida con éxito '+ response),
      error: (error) => console.log('Error al guardar la información ' + error)
    });
  }

  cargarPersonas(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-angular-d7fc3-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  modificarPersona(id: number, persona: Persona){
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-angular-d7fc3-default-rtdb.firebaseio.com/datos/' + id + '.json?auth=' + token;
    this.httpClient.put(url, persona).subscribe({
      next: (response) => console.log('Información modificada con éxito '+ response),
      error: (error) => console.log('Error al modificar la información ' + error)
    });
  }

  eliminarPersona(id: number){
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-angular-d7fc3-default-rtdb.firebaseio.com/datos/' + id + '.json?auth=' + token;
    this.httpClient.delete(url).subscribe({
      next: (response) => console.log('Información eliminada con éxito '+ response),
      error: (error) => console.log('Error al eliminar la información ' + error)
    });
  }

}