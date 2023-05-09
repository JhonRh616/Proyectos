import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { signOut } from "firebase/auth";
import { LogginService } from './servicios/LogginService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mi Primera prueba';
  saludo = 'Buenas tardes'

  tituloListado = 'Listado de Personas';

  constructor(private loginService: LogginService, private router: Router){}

  ngOnInit(): void {
    initializeApp({
      apiKey: "AIzaSyBRrCteKpnIfBwqeGEUZ2VyrgZQP7L1prQ",
      authDomain: "listado-personas-angular-d7fc3.firebaseapp.com"
    })
  }

  isAuthenticated(): boolean{
    return this.loginService.isAuthenticated();
  }

  isCalculadora(): boolean{
    if(this.router.url.includes('/calculadora')){ return true; }
    
    return false;
  }

  salir(){
    this.loginService.salir();
  }


}
