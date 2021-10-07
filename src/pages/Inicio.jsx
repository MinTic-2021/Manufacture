import React from 'react'
import calculator from 'media/calculator.png'

const Inicio = () => {
    return (
        <div>
           <div style={{paddingBottom: '40px'}}></div>
            <div className="container-sm">
                <h3 style={{paddingBottom: '10px', paddingTop: '20px', display: 'flex', justifyContent: 'center'}}>
                Bienvenido a Manufactura SA
                </h3>
                <div style={{justifyContent: 'center'}}>
                <hr style={{border:'15px', display:'flex'}}/>
                </div>
                <span style={{display: 'flex', justifyContent: 'center'}}>
                Todo lo que necesitas para gestionar las ventas
                </span>
                <span style={{display: 'flex', justifyContent: 'center', paddingBottom: '40px'}}>
                de forma segura y eficiente.
                </span>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={calculator} style={{height: '150px', borderRadius: '0%'}}/>
                </div>
            </div> 
        </div>
    )
}

export default Inicio
