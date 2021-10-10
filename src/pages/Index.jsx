import React from 'react'
import devfull from 'media/Devfull.png'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div>
            <div style={{paddingBottom: '40px'}}>
                <div className="container-sm">
                    <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '25px', paddingTop: '25px'}}>
                        <img src={devfull} alt="DevFull" style={{height: '20vh'}}/>
                    </div>
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
                        <Link to={'/login'}>
                            <button type="submit" className="btn btn-primary" style={{backgroundColor:  '#426E86'}}>Iniciar sesión</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index