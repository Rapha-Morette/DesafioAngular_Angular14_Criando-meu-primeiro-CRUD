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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CriarNotasComponent,
    ListarNotasComponent,
    NotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
