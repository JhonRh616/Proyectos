import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modulo-personas/persona/persona.model';
import { PersonasService } from 'src/app/servicios/PersonasService.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personasService: PersonasService, private router: Router){}

  ngOnInit(): void {
    this.personasService.obtenerPersonas().subscribe({
      next: personas => {
        this.personas = personas as Persona[];
        this.personasService.setPersonas(this.personas);
      }
    });
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }

}

