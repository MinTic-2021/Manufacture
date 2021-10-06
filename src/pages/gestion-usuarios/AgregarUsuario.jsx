import React from 'react'

const AgregarUsuario = () => {
    return (
        <div style={{paddingBottom: '40px'}}>
            <div class="container-sm">
            <h3 style={{marginTop: '3vh', marginBottom: '5vh', display: 'flex', justifyContent: 'center'}}>
                Agregar Usuario Nuevo
            </h3>
            <form style={{marginLeft: '10vh', marginRight: '10vh'}}>
                <div class="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                    <div class="col">
                        <label style={{paddingBottom: '1vh'}}>Nombres:</label>
                        <input type="text" class="form-control" placeholder="Nombres" />
                    </div>
                    <div class="col">
                        <label style={{paddingBottom: '1vh'}}>Apellidos:</label>
                        <input type="text" class="form-control" placeholder="Apellidos" />
                    </div>
                </div>
                <div class="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                    <div class="col" >
                        <label style={{paddingBottom: '1vh'}}>Correo electrónico:</label>
                        <input type="email" class="form-control" placeholder="E-mail" />
                    </div>
                    <div class="col" >
                        <label style={{paddingBottom: '1vh'}}>Teléfono:</label>
                        <input type="number" class="form-control" placeholder="Celular" />
                    </div>
                </div>
                <div class="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                    <div class="col" >
                        <label style={{paddingBottom: '1vh'}}>Contraseña:</label>
                        <input type="password" class="form-control" placeholder="Password" />
                    </div>
                    <div class="col" >
                        <label style={{paddingBottom: '1vh'}}>Repetir contraseña:</label>
                        <input type="password" class="form-control" placeholder="Password" />
                    </div>
                </div>
                <div class="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                    <div class="col" >
                        <label style={{paddingBottom: '1vh'}}>Fecha de ingreso:</label>
                        <input type="date" class="form-control" />
                    </div>
                    <div class="col" >
                        <label style={{paddingRight: '60vh', paddingBottom: '1vh'}}>Rol:</label>
                        <select class="form-select form-select-sm" style={{width: '30%', height: '55%'}}>
                            <option>Seleccione uno</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                        </select>
                    </div>
                </div>
            </form>
            <div style={{margin: '3vh 0vh 0vh 10vh'}}>
                <button type="button" class="btn btn-secondary" onclick="alert('Usuario agregado exitosamente')" style={{padding: '1px 3px 1px 3px'}}>
                    Agregar usuario
                </button>
                <button type="button" class="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginLeft: '5px'}}>
                    Cancelar
                </button>
            </div>
        </div>
    </div>
    )
}

export default AgregarUsuario

