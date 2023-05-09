import { Injectable } from "@angular/core";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Router } from "@angular/router";

@Injectable()
export class LogginService{

  token: string;

  constructor(private router: Router){}

  enviaMensajeAConsola(mensaje: string){
    console.log(mensaje);
  }

  login(email: string, password: string){
    signInWithEmailAndPassword(getAuth(), email, password).then(
      (response) => {
        getAuth().currentUser?.getIdToken().then(
          (token) => {
            this.token = token;
            this.router.navigate(['/personas']);
          }
        )
      }
    )
  }

  getIdToken(): string{
    return this.token;
  }

  isAuthenticated(): boolean{
    if(this.token == null || this.token == ''){
      return false;
    }
    return true;
  }

  salir(){
    signOut(getAuth()).then( () => {
      this.token = '';
      this.router.navigate(['/login']);
    })
  }

}