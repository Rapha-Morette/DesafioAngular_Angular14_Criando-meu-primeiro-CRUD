import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CriarNotasComponent } from './componentes/notas/criar-notas/criar-notas.component';
import { FormsModule } from '@angular/forms';
import { ListarNotasComponent } from './componentes/notas/listar-notas/listar-notas.component';
import { NotaComponent } from './componentes/notas/nota/nota.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirNotasComponent } from './componentes/notas/excluir-notas/excluir-notas.component';
import { EditarNotasComponent } from './componentes/notas/editar-notas/editar-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CriarNotasComponent,
    ListarNotasComponent,
    NotaComponent,
    ExcluirNotasComponent,
    EditarNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
