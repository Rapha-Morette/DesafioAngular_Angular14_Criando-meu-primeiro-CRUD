import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css'],
})
export class ListarNotasComponent implements OnInit {
  listaNotas: Nota[] = [];
  constructor(private service: NotaService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaNotas) => {
      this.listaNotas = listaNotas;
    })
  }
}
