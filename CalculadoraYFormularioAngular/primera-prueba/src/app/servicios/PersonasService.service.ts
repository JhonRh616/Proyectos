import { Injectable, EventEmitter } from "@angular/core";
import { Persona } from "../modulo-personas/persona/persona.model";
import { LogginService } from "./LogginService.service";
import { DataServices } from "./DataService.service";

@Injectable()
export class PersonasService{

  personas: Persona[] = [];

  saludar = new EventEmitter<number>();

  constructor(private logginService: LogginService, private dataService: DataServices){}

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  agregarPersona(persona: Persona){
    this.logginService.enviaMensajeAConsola('Persona enviada: '+ persona.nombre + ' ' + persona.apellido);
    if(!this.personas){
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(id: number): Persona{
    let persona: Persona = this.personas[id];
    return persona;
  }

  modificarPersona(id: number, persona: Persona){
    let personaEdit = this.personas[id];
    personaEdit.nombre = persona.nombre;
    personaEdit.apellido = persona.apellido;
    this.dataService.modificarPersona(id, persona);
  }

  eliminarPersona(id: number){
    this.personas.splice(id, 1);
    this.dataService.eliminarPersona(id);
    this.modificarPersonas();
  }

  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }

  modificarPersonas(){
    if(this.personas){
      this.dataService.guardarPersonas(this.personas);
    }
  }
}