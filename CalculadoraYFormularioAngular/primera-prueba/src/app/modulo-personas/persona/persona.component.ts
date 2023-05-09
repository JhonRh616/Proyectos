import { Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent {

  constructor() { }

  nombre = 'Jhon';
  apellido = 'Romero';
  edad = 21;

}
