import React from "react";

function Producto (props){
return (
    <div style={{color: "black",borderRadius: "10px", padding: "30px", margin: "20px", backgroundColor:"#ccc"}} >
       
        <h2> {props.name} </h2>
        <p>{props.price}</p>
      {props.descripcion && <p>{props.descripcion}</p>} 
    </div>
  );
}

export default Producto;