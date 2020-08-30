import React, { Fragment } from 'react';
import { useState } from 'react';

const Formulario = () => {
    const [data, setData]= useState({
        nombre:'',
        apellido:''
    })

    const handleInputchange = (e) => {
      setData({
        ...data,
        [e.target.name] : e.target.value
      })
    }
     
    const enviarData = (e) => {
      e.preventDefault();
      console.log(data.nombre +'' + data.apellido)
    }
    return (
        <Fragment>
            <form className="row" onSubmit={enviarData}>
                <div className="col-md-3">
                    <input 
                        placeholder="Ingrese nombre" 
                        className="form-control" 
                        type="text" 
                        name="nombre"
                        onChange={handleInputchange}/>
                </div>
                <div className="col-md-3">
                    <input 
                        placeholder="Ingrese apellido"
                        className="form-control" 
                        type="text" 
                        name="apellido"
                        onChange={handleInputchange}/>
                </div>
                <div className="col-md-3" >
                    <button className="btn btn-primary">Enviar</button>
                </div>

            </form>
        </Fragment>
    );
}
 
export default Formulario;