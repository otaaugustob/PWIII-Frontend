import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { NovoAutorComponent } from './novo-autor/novo-autor.component';

const routes: Routes = [

  {path : 'listagem', component: ListaClienteComponent},
  {path: 'novo', component: NovoAutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
