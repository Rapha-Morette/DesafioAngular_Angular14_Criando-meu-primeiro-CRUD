import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-notas',
  templateUrl: './excluir-notas.component.html',
  styleUrls: ['./excluir-notas.component.css'],
})
export class ExcluirNotasComponent implements OnInit {
  nota: Nota = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: NotaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((nota) => {
      this.nota = nota;
    });
  }

  excluirNota() {
    if (this.nota.id) {
      this.service.excluir(this.nota.id).subscribe(() => {
        this.router.navigate(['/listarNotas']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarNotas']);
  }
}
