import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarNotasComponent } from './componentes/notas/criar-notas/criar-notas.component';
import { ListarNotasComponent } from './componentes/notas/listar-notas/listar-notas.component';

const routes: Routes = [
  {path:'', redirectTo: '/listarNotas', pathMatch: 'full'},
  {path: 'criarNotas', component: CriarNotasComponent },
  {path: 'listarNotas', component: ListarNotasComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
