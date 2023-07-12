import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-notas',
  templateUrl: './editar-notas.component.html',
  styleUrls: ['./editar-notas.component.css'],
})
export class EditarNotasComponent implements OnInit {
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

  editarNota() {
    this.service.editar(this.nota).subscribe(() => {
      this.router.navigate(['/listarNotas']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarNotas']);
  }
}
