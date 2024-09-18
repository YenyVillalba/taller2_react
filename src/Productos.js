import React from "react";

function Productos (props){
return (
    <div style={{color: "black",borderRadius: "10px", padding: "20px", margin: "20px", backgroundColor:"#FFE4C4"}} >
       <img src={props.imageSrc} alt={props.name} style={{  borderRadius: '20px', width: '200px', height: '200px'}}/>
        <h2> {props.name} </h2>
        <p>{props.price}</p>
    </div>
);
}
export default Productos;
