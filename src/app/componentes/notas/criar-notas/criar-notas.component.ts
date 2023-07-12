import { Component } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-notas',
  templateUrl: './criar-notas.component.html',
  styleUrls: ['./criar-notas.component.css'],
})
export class CriarNotasComponent {
  nota: Nota = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };
  constructor(private service: NotaService, private router: Router) {}

  criarNota() {
    this.service.criar(this.nota).subscribe(() => {
      this.router.navigate(['/listarNotas'])
    })
  }

  cancelarNota() {
   this.router.navigate(['/listarNotas'])
  }
}
