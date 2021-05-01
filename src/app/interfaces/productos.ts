export interface Productos {
  id: number;
  idCategoria: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
  precio: number;
  imagen: string;
  puntuacion: number;
}

export const ListaProductos: Array<Productos> = [
  {
    id: 1,
    idCategoria: 1,
    nombre: 'Producto1',
    descripcion: 'Descripcion del producto1',
    cantidad: 0,
    precio: 59,
    imagen: 'img/producto1.jpg',
    puntuacion: 4,
  },
  {
    id: 2,
    idCategoria: 1,
    nombre: 'Producto2',
    descripcion: 'Descripcion del producto2',
    cantidad: 1,
    precio: 999,
    imagen: 'img/producto2.jpg',
    puntuacion: 3,
  },
  {
    id: 3,
    idCategoria: 1,
    nombre: 'Producto3',
    descripcion: 'Descripcion del producto3',
    cantidad: 1,
    precio: 2999,
    imagen: 'img/producto3.jpg',
    puntuacion: 2,
  },
];
