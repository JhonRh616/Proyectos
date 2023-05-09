import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './modulo-personas/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './modulo-calculadora/calculadora/calculadora.component';
import { ListadoPersonaComponent } from './modulo-listar-personas/listado-persona/listado-persona.component';
import { CalculadoraFormularioComponent } from './modulo-calculadora/calculadora-formulario/calculadora-formulario.component';
import { CalculadoraResultadoComponent } from './modulo-calculadora/calculadora-resultado/calculadora-resultado.component';
import { PersonasComponent } from './modulo-personas/personas/personas.component';
import { LogginService } from './servicios/LogginService.service';
import { PersonasService } from './servicios/PersonasService.service';
import { AppRoutingModule } from './app-routing.module';
import { ModuloPersonasComponent } from './modulo-personas/modulo-personas.component';
import { ModuloListarPersonasComponent } from './modulo-listar-personas/modulo-listar-personas.component';
import { ListadoPersonasComponent } from './modulo-listar-personas/listado-personas/listado-personas.component';
import { ListadoPersonasFormularioComponent } from './modulo-listar-personas/listado-personas-formulario/listado-personas-formulario.component';
import { ErrorComponent } from './modulo-listar-personas/error/error.component';
import { DataServices } from './servicios/DataService.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogginGuardian } from './servicios/LogginGuardian.service';

@NgModule({
  declarations: [
    AppComponent, 
    PersonasComponent, 
    PersonaComponent, 
    CalculadoraComponent, 
    ListadoPersonasComponent, 
    ListadoPersonaComponent, 
    CalculadoraFormularioComponent, 
    CalculadoraResultadoComponent, 
    ListadoPersonasFormularioComponent, 
    ModuloPersonasComponent, 
    ModuloListarPersonasComponent, 
    ErrorComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LogginService,
    PersonasService,
    DataServices,
    LogginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
