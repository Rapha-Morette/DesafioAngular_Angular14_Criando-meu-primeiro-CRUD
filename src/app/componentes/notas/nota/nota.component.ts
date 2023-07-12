import { Component, Input } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css'],
})
export class NotaComponent {
  @Input() nota: Nota = {
    id: 1,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
  };

  larguraNota(): string {
    if (this.nota.conteudo.length >= 256) {
      return 'nota-g';
    }
    return 'nota-p';
  }
}
