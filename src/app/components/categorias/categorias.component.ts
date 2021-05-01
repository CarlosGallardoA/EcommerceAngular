import { Component, OnInit } from '@angular/core';
import { Productos, ListaProductos } from '../../interfaces/productos';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  Lista = ListaProductos;
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit(): void {}
}
