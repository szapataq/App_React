import React, { Fragment } from 'react';
import { useState } from 'react';

const Lista = () => {
    const [arrayNum, setarrayNum] =  useState([1,2,3,4,5])
    const [numero, setNumero] = useState(6);
    const handleAdd = () => {
        setNumero(numero+1);
        // console.log('me hiso click');
        setarrayNum([...arrayNum, numero]);
    }

    return (
        <Fragment>
            <h3>Esta es mi primera lista</h3>
            <button onClick={handleAdd}>Añadir</button>
            <ul>
            { arrayNum.map((element, index) => {
                return <li key={index}>{element}</li>
              })
            }
            </ul>
        </Fragment> 
     );
}
 
export default Lista;