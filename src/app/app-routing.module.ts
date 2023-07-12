import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarNotasComponent } from './componentes/notas/criar-notas/criar-notas.component';
import { ListarNotasComponent } from './componentes/notas/listar-notas/listar-notas.component';
import { ExcluirNotasComponent } from './componentes/notas/excluir-notas/excluir-notas.component';
import { EditarNotasComponent } from './componentes/notas/editar-notas/editar-notas.component';

const routes: Routes = [
  { path: '', redirectTo: '/listarNotas', pathMatch: 'full' },
  { path: 'criarNotas', component: CriarNotasComponent },
  { path: 'listarNotas', component: ListarNotasComponent },
  { path: 'notas/excluirNotas/:id', component: ExcluirNotasComponent },
  { path: 'notas/editarNotas/:id', component: EditarNotasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
