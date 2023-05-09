import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './modulo-calculadora/calculadora/calculadora.component';
import { ListadoPersonasComponent } from './modulo-listar-personas/listado-personas/listado-personas.component';
import { ModuloListarPersonasComponent } from './modulo-listar-personas/modulo-listar-personas.component';
import { ListadoPersonasFormularioComponent } from './modulo-listar-personas/listado-personas-formulario/listado-personas-formulario.component';
import { ErrorComponent } from './modulo-listar-personas/error/error.component';
import { LoginComponent } from './login/login.component';
import { LogginGuardian } from './servicios/LogginGuardian.service';

const routes: Routes = [
  {path: '', component: ModuloListarPersonasComponent, canActivate:[LogginGuardian]},
  {path: 'personas', component: ListadoPersonasComponent, canActivate:[LogginGuardian], children: 
    [
      {path: 'agregar', component: ListadoPersonasFormularioComponent},
      {path: ':id', component: ListadoPersonasFormularioComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'calculadora', component: CalculadoraComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
