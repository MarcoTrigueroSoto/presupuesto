import React from 'react';
import Gasto from './Gastos'

const Listado = ({gastos}) => {
     
     
     return ( <div className= 'gastos-realizados'>
         
         <h2>Listado</h2> 
            {gastos.map( gasto => (
                <p>{gasto.id} </p>
                
               
            ))}
     </div>  )};

 
export default Listado;