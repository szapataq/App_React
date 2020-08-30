import React, { Fragment } from 'react';

const Jsx = () => {
    // const hola = 'que tal';
    const temperatura = 15;

    return ( 
        <Fragment>
            <h2>Hola, soy sama</h2>
            <h4>{temperatura > 20 ? 'calor' : 'frio'}</h4>
        </Fragment>
    
     );
}
 
export default Jsx;