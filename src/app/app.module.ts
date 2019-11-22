import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { NovoAutorComponent } from './novo-autor/novo-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClienteComponent,
    NovoAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
