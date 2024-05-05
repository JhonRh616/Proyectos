import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ReservaComponent } from './components/reserva/reserva.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const config: SocketIoConfig = { url: 'ws://localhost:8080/cine/websocket', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
