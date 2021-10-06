import React from 'react'

const AgregarUsuario = () => {
    return (
        <div style={{paddingBottom: '40px'}}>
            <div className="container-sm">
            <h3 style={{marginTop: '3vh', marginBottom: '5vh', display: 'flex', justifyContent: 'center'}}>
                Agregar Usuario Nuevo
            </h3>
            <form style={{marginLeft: '10vh', marginRight: '10vh'}}>
                <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                    <div className="col">
                        <label style={{paddingBottom: '1vh'}}>Nombres:</label>
                        <input type="text" className="form-control" placeholder="Nombres" />
                    </div>
                    <div className="col">
                        <label style={{paddingBottom: '1vh'}}>Apellidos:</label>
                        <input type="text" className="form-control" placeholder="Apellidos" />
                    </div>
                </div>
                <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                    <div className="col" >
                        <label style={{paddingBottom: '1vh'}}>Correo electrónico:</label>
                        <input type="email" className="form-control" placeholder="E-mail" />
                    </div>
                    <div className="col" >
                        <label style={{paddingBottom: '1vh'}}>Teléfono:</label>
                        <input type="number" className="form-control" placeholder="Celular" />
                    </div>
                </div>
                <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                    <div className="col" >
                        <label style={{paddingBottom: '1vh'}}>Contraseña:</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="col" >
                        <label style={{paddingBottom: '1vh'}}>Repetir contraseña:</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                </div>
                <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                    <div className="col" >
                        <label style={{paddingBottom: '1vh'}}>Fecha de ingreso:</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col" >
                        <label style={{paddingRight: '60vh', paddingBottom: '1vh'}}>Rol:</label>
                        <select className="form-select form-select-sm" style={{width: '30%', height: '55%'}}>
                            <option>Seleccione uno</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                        </select>
                    </div>
                </div>
            </form>
            <div style={{margin: '3vh 0vh 0vh 10vh'}}>
                <button type="button" className="btn btn-secondary" onclick="alert('Usuario agregado exitosamente')" style={{padding: '1px 3px 1px 3px'}}>
                    Agregar usuario
                </button>
                <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginLeft: '5px'}}>
                    Cancelar
                </button>
            </div>
        </div>
    </div>
    )
}

export default AgregarUsuario

