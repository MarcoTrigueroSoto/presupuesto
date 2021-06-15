import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import Error from './error';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarcrearGasto}) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const agregarGasto = e =>{
        e.preventDefault();

        if(cantidad < 1 || isNaN(cantidad) || nombre.trim()=== ''){
        guardarError(true);
        return;
        }
        guardarError(false);

        const gasto = {
            nombre,
            cantidad,
            id: nanoid()
        }

     console.log(gasto);       

     guardarGasto(gasto);
     guardarcrearGasto(true);   
     guardarNombre('');
     guardarCantidad(0);

    }
    
    return ( <form
            onSubmit={agregarGasto}
            >
        <h2>
            Agrega tus gastos
        </h2>
        { error ? <Error mensaje='Ambos campos son obligatorios y tener un gasto mayor a 1' /> : null}
        <div className='campo'>
            <label>Nombre del gasto</label>
            <input
            type='text'
            className='u-full-width'
            placeholder='Transporte'
            value={nombre}
            onChange={e => guardarNombre(e.target.value)}
            />

            <label>Cantidad del gasto</label>
            <input
            type='number'
            className='u-full-width'
            placeholder='300'
            value={cantidad}
            onChange={e => guardarCantidad(parseInt (e.target.value))}
            />

        <input  
            type='submit' 
            className='button-primary u-full-width'
            value='Agregar Gasto'
        />
        </div>
    </form> );
}
 

Formulario.propTypes = {
 guardarGasto: PropTypes.func.isRequired,
 guardarcrearGasto: PropTypes.func.isRequired   
}

export default Formulario;