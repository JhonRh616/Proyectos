import { Component, OnInit } from '@angular/core';
import { LogginService } from '../servicios/LogginService.service';

@Component({
  selector: 'app-modulo-listar-personas',
  templateUrl: './modulo-listar-personas.component.html',
  styleUrls: ['./modulo-listar-personas.component.css']
})
export class ModuloListarPersonasComponent implements OnInit {

  tituloListado = 'Listado de Personas';

  constructor(private loginService: LogginService){}

  ngOnInit(): void {
    
  }

  isAuthenticated(): boolean{
    return this.loginService.isAuthenticated();
  }

  salir(){

  }

}
