import { Component, Input, OnInit} from '@angular/core';
import { Persona } from 'src/app/modulo-personas/persona/persona.model';
import { PersonasService } from 'src/app/servicios/PersonasService.service';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit{

  @Input() persona: Persona;
  @Input() iArray: number;

  constructor(private personasService: PersonasService){}

  ngOnInit(): void{}

  emitirSaludo(){
    this.personasService.saludar.emit(this.iArray+1);
  }
}
