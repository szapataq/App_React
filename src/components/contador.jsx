import React, { useState, Fragment } from 'react';

const Contador = () => {
  const [numero, setNumero] = useState(0);

  const handleContador = () => {
    setNumero(numero+1)
  }

  return (
    <Fragment>
      <h3>Mi primer componente react {numero}</h3>
      <button onClick={handleContador}>Aumentar</button>
    </Fragment>
  );
}
 
export default Contador;

