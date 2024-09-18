
import React from 'react';

function ListaDeProductos({ productos }) {
  return (
    <ul>
      {productos.map((producto, index) => (
        <li key={index}>
          {producto.nombre} - {producto.precio}
        </li>
      ))}
    </ul>
  );
}

export default ListaDeProductos;

