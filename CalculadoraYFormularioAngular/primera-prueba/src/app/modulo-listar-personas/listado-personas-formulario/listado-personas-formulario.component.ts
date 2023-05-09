import { Component, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modulo-personas/persona/persona.model';
import { LogginService } from 'src/app/servicios/LogginService.service';
import { PersonasService } from 'src/app/servicios/PersonasService.service';

@Component({
  selector: 'app-listado-personas-formulario',
  templateUrl: './listado-personas-formulario.component.html',
  styleUrls: ['./listado-personas-formulario.component.css']
})
export class ListadoPersonasFormularioComponent implements OnInit {

  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string;
  apellidoInput:string;
  index: number;
  modoEdicion: number;

  constructor(private personasService: PersonasService, private route: ActivatedRoute, private router: Router) {
    this.personasService.saludar.subscribe((
      (indice: number) => alert('El índice es: ' +indice)
    ));
  }

  //@ViewChild('nombreInput') nombreInput: ElementRef;
  //@ViewChild('apellidoInput') apellidoInput: ElementRef;

  //agregarPersona(){
    //let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.personaCreada.emit(persona1);
  //}

  //agregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement){
    //let persona1 = new Persona(nombreInput.value, apellidoInput.value);
    //this.personaCreada.emit(persona1);
  //}

  //agregarPersona(){
    //let persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //this.logginService.enviaMensajeAConsola('Persona enviada: '+ persona.nombre + ' ' + persona.apellido);
    //this.personaCreada.emit(persona1);
    //this.personasService.agregarPersona(persona);
  //}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if(this.modoEdicion && this.modoEdicion === 1){
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(){
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if(this.modoEdicion && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index, persona);
    }else{
      this.personasService.agregarPersona(persona);
    }

    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    
    this.router.navigate(['personas']);
  }
}
