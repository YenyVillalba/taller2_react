//SALUDO
/*import React from 'react';
import Saludo from './Saludo'; 

function App() {
  return (
    <div>
      <h1></h1>
      <Saludo name="Yeny" /> 
    </div>
  );
}

export default App;*/




//PRODUCTO
/*import React from "react";
import Productos from "./Productos";
import productoImage1 from './assets/tacon.jpg';
import productoImage2 from './assets/bota.jpg';

function App() {
    return (
      <div>
      <h1>Productos para la Venta</h1>
      <Productos 
          imageSrc={productoImage1} 
          name="Tacon Cristal"  
          price="$90.000" 
      />
      <Productos 
          imageSrc={productoImage2} 
          name="Bota Texana" 
          price="$100.000" 
      />
      </div>
    )
}
export default App;*/

//CONTADOR FUNCIONAL

/*import React from "react";
import ContadorFuncional from "./ContadorFuncional";


function App () {
  return (
    <div>
        <ContadorFuncional/>
    </div>
  );
}

export default App;*/

//CONTADOR CLASE

/*import React from 'react';
import ContadorClase from './ContadorClase';

function App() {
  return (
    <div>
      <h1>  </h1>
      <ContadorClase />
    </div>
  );
}

export default App;*/

//LISTA DE PRODUCTOS
/*import React, { useState } from 'react';
import AgregarProducto from './AgregarProducto';
import ListaDeProductos from './ListaDeProductos';

function App() {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <AgregarProducto agregarProducto={agregarProducto} />
      <ListaDeProductos productos={productos} />
    </div>
  );
}

export default App;*/

//DETALLE PRODUCTO
import React from "react";
import Producto from "./DetalleProducto";


function App() {
    return (
      <div style={{ border: '1px solid #ddd', borderRadius: '15px', padding: '10px', margin: '10px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: '#8B0000' }}>Lista Con Detalle </h1>
      <Producto
          
          name="Tacon Cristal"  
          price="$90.000" 
           descripcion="Un zapato versátil y novedoso que sigue la tendencia del cristal en el mundo de la moda."
      />
      <Producto
        
          name="Bota Texana" 
          price="$100.000" 
          descripcion= "Texana encarna el equilibrio perfecto entre la autenticidad del estilo vaquero y la sofisticación urbana"
      />
      <Producto
        
        name="Baleta" 
        price="$50.000" 
        descripcion= " Ideales para estar a la moda en toda ocasion. Rompe la monotonia con la ultima noticia."
    />
     
  
      </div>
    )
}
export default App;