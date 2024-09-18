import React, { useState } from 'react';

function ContadorFuncional() {
    const [contador, setContador] = useState(0);
    const incrementar = () => {
        setContador(contador + 1);
        
        };
        const limpiar = () => {
            setContador(0);
    }
    
    return (
        <div style={{
            border: '2px solid #0000ff', 
            padding: '20px', 
            borderRadius: '10px', 
            width: '200px', 
            textAlign: 'center', 
            color: '#0000ff', 
          }}>
            <h1>Contador:{contador} </h1>

            <button onClick={incrementar} style={{ marginRight: '10px' }}> Incrementar </button>
            <button onClick={limpiar}>Limpiar</button>
        </div>

    );
}

export default ContadorFuncional;