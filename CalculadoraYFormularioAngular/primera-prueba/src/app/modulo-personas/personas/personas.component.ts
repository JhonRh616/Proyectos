import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
    deshabilitado = false;
    mensaje="No se ha agregado ninguna persona";
    mostrar=false;
    titulo="";
    tituloNgIf="Este es el titulo de ngIf y todo eso";
    
    agregarPersona(){
        this.mostrar=true;
        this.mensaje="Persona agregada con éxito";
    }

}