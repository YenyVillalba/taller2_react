
import React, { useState } from 'react';

function AgregarProducto({ agregarProducto }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const enviar = (evento) => {
    evento.preventDefault();
    agregarProducto({ nombre, precio });
    setNombre("");
    setPrecio("");
  };

  return (
    <form onSubmit={enviar} style={{ display: 'flex', alignItems: 'center', gap: '20px' }} >
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Producto"
        
        
      />
      <input
        type="text"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="Precio"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AgregarProducto;
