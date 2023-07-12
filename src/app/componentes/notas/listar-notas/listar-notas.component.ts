import { Component } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css'],
})
export class ListarNotasComponent {
  listaNotas: Nota[] = [];
}
