import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent implements OnInit {
  ruta2: any;
  id: number = 0;
  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    this.ruta2 = this.ruta.params.subscribe((parametros) => {
      this.id = parametros['id'];
      console.log(this.id);
    });
  }
}
