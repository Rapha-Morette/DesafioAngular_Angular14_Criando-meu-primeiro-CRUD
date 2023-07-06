import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-notas',
  templateUrl: './criar-notas.component.html',
  styleUrls: ['./criar-notas.component.css'],
})
export class CriarNotasComponent {
  nota = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  criarNota() {
    alert('Nota criada com sucesso!');
  }

  cancelarNota() {
    alert('Nota cancelada!');
  }
}
