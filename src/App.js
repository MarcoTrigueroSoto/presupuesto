import React, { useState} from 'react';
import Pregunta from './components/pregunta';
import Formulario from './components/formulario';
import Listado from './components/Listado';

function App() {
  
  const[presupuesto, savePresupuesto] = useState(0);
  const[restante, guardarRestante] = useState(0);
  const[mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  const agregarNuevoGasto = gasto => {
    guardarGastos ([
      ...gastos,
      gasto
    ])
     
    
  } 
 
  return (
    
    <div className='container' >
    <h1>Presupuesto semanal</h1>

    <div className='contenido-principal contenido'>

      { mostrarpregunta ? 
        (<Pregunta
    
          savePresupuesto = {savePresupuesto}
    
          guardarRestante = {guardarRestante}
    
          actualizarPregunta={actualizarPregunta}
    />
    ) : (
    <div className='row'>
    <div className='one-half column'>
    <Formulario 
      agregarNuevoGasto = {agregarNuevoGasto}
    />

    </div>
    <div className='one-half column'>
      
      <Listado 
        gastos= {gastos}
      />

    </div>
    </div>
    
    
    )}
    
    

    </div>

    </div>
    
    
  );
}

export default App;
