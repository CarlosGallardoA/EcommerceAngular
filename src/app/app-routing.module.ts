import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from '../app/components/categorias/categorias.component';
import { HomeComponent } from '../app/components/home/home.component';
import { DetalleProductoComponent } from '../app/components/detalle-producto/detalle-producto.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'productos/:id', component: DetalleProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
