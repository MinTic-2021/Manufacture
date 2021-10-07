import React from 'react'
import foto from 'media/foto.png'

const ActualizarInformacion = () => {
    return (
            <div style={{paddingBottom: '40px'}}>
                <div className="cointainer-sm">
                    <div style="display: grid; align-items: center; grid-template-columns: 30% 70%;">
                        <div style={{display: 'flex', flexDirection: 'column', marginInline: '10vh'}}>
                            <img src={foto} alt="foto" style={{width: '30vh', paddingBottom: '1vh'}}/>
                            <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                        </div>
                        <h3>
                            Actualizar Información de Usuario
                        </h3>
                    </div>
                    <div>
                        <form style={{margin: '5vh 10vh 3vh 10vh'}}>
                            <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                                <div className="col">
                                    <label style={{paddingBottom: '1vh'}}>Nombres:</label>
                                    <input type="text" className="form-control" placeholder="Nombres"/>
                                </div>
                                <div className="col">
                                    <label style={{paddingBottom: '1vh'}}>Apellidos:</label>
                                    <input type="text" className="form-control" placeholder="Apellidos"/>
                                </div>
                            </div>
                            <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                                <div className="col">
                                    <label style={{paddingBottom: '1vh'}}>Correo electrónico:</label>
                                    <input type="email" className="form-control" placeholder="E-mail"/>
                                </div>
                                <div className="col">
                                    <label style={{paddingBottom: '1vh'}}>Teléfono:</label>
                                    <input type="number" className="form-control" placeholder="Celular"/>
                                </div>
                            </div>
                            <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                                <div className="col" >
                                    <label style={{paddingBottom: '1vh'}}>Contraseña:</label>
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="col" >
                                    <label style={{paddingBottom: '1vh'}}>Repetir contraseña:</label>
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                            </div>
                        </form>
                        <div style={{margin: '2vh 0vh 0vh 10vh'}}>
                            <button type="button" className="btn btn-secondary" onclick="alert('Información actualizada')" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                                Actualizar información
                            </button>
                            <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ActualizarInformacion
