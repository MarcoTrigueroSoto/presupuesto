import React,{Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './error';

const Pregunta = ({savePresupuesto,guardarRestante,actualizarPregunta}) => {
    //definiendo state pregunta
    const[cantidad, guardarCantidad] = useState(0);

    const[error, mostrarError] = useState(false);
    
    //Validar presupuesto
    const validarPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value, 10));
    }
    //submit para definir el presupuesto

    const guardarPresupuesto = e =>{
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN(cantidad)){
            mostrarError (true);
            return;
        } 
        //its ok

        mostrarError(false);
        savePresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);


    }

    return (  
        <Fragment>
            <div className='container'>
                <h2>¿Cuál es tu Presupuesto?</h2>

                { error ? <Error mensaje= 'Presupuesto es incorrecto'/> : null}

                <form onSubmit={guardarPresupuesto}>
                    <input 
                    type='number' 
                    name='presupesto'
                    placeholder='Presupuesto'
                    className='u-full-width'
                    onChange={validarPresupuesto}
                    />

                    <input 
                    type='submit'
                    className='button--submit'
                    value='definir presupuesto'
                    />
                </form>
            </div>
        </Fragment>
        

    );
}

Pregunta.propTypes = {
    savePresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired 
   }
 
export default Pregunta;