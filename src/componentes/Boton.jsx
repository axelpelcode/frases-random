import React from 'react';


const Boton = ({nombreBoton, clickEfecto, idBoton, claseBoton}) => (
    <button id={idBoton} className={claseBoton} onClick={clickEfecto}>{nombreBoton}</button>
);

export default Boton;