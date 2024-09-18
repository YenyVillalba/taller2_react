
import React, { Component } from 'react';

class ContadorClase extends Component {
    constructor (props){
        super(props);
        this.state={
            contador:0,
        };
    }


incrementar= ()=> {
   this.setState((prevState)=>({
    contador: prevState.contador +1,
}));
};

limpiar = () => {
    this.setState({
      contador: 0,
    });
  };
        render (){
                 return (
        <div style={{
            border: '5px solid #800080', 
            padding: '20px', 
            borderRadius: '10px', 
            width: '200px', 
            textAlign: 'center', 
            color: '#800080',
            
          }}> 
            <h1 >Contador:{this.state.contador} </h1>
       
            <button onClick= {this.incrementar }style={{ marginRight: '10px' }}> Incrementar </button>
            <button onClick={this.limpiar}>Limpiar</button> 
            </div>
        
    );
}
}



export default ContadorClase;

