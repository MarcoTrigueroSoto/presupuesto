import React, { useState, useEffect} from 'react';
import Pregunta from './components/pregunta';
import Formulario from './components/formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/controlPresupuesto';


function App() {
  
  const[presupuesto, savePresupuesto] = useState(0);
  const[restante, guardarRestante] = useState(0);
  const[mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarcrearGasto] = useState(false);
  //useefect actualiza el restante

  useEffect(() => {
    if(creargasto){
      //agrega el nuevo presupuesto
      guardarGastos ([
        ...gastos,
        gasto
      ]);
      // resta del presupuesto

      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

    }
  }, [gasto]);


     
    
   
 
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
      guardarGasto = {guardarGasto}

      guardarcrearGasto= {guardarcrearGasto}
    />

    </div>
    <div className='one-half column'>
      
      <Listado 
        gastos= {gastos}
      />

      <ControlPresupuesto 
      presupuesto = {presupuesto}

      restante = {restante}
      />

    </div>
    </div>
    
    
    )}
    
    

    </div>

    </div>
    
    
  );
}

export default App;
