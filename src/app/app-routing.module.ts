import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { Page404Component } from './page404/page404.component';
import { FiltrosComponent } from './filtros/filtros.component';

const routes: Routes = [
  { path:'listado', component:ListadoComponent},
  { path:'filtros', component:FiltrosComponent},
  { path:'**', component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
