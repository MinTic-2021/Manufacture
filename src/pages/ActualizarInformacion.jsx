import React, {useRef} from 'react'
import foto from 'media/foto.png'
import { useAuth0 } from "@auth0/auth0-react";
import { ActualizarUsuario } from 'utils/api';
import { useUser } from 'contex/userContext';

const ActualizarInformacion = () => {

    const {user} = useAuth0()
    const {userData} = useUser()
    const form = useRef(null)

    const submitform = async (e) => {
        e.preventDefault()
        const fd = new FormData(form.current)
        const nuevoUsuario = {}
        fd.forEach((value, key) => {
            nuevoUsuario[key] = value
        })
        ActualizarUsuario(userData._id, nuevoUsuario)
        form.current.reset()
    }

    return (
            <div style={{paddingBottom: '40px'}}>
                <div className="cointainer-sm">
                    <div style={{display: 'grid', alignItems: 'center', gridTemplateColumns: '30% 70%', margin: '0vh 20vh'}}>
                        <div style={{display: 'flex', flexDirection: 'column', marginInline: '10vh'}}>
                            {user.picture ? 
                                <img src={user.picture} alt="foto" style={{height: '19vh', width: '17vh', borderRadius: '1vh', marginTop: '3vh', marginBottom: '1vh'}}/> : 
                                <img src={foto} alt="foto" style={{width: '30vh', paddingBottom: '1vh'}}/>}
                            <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                        </div>
                        <h3>
                            Actualizar Información de Usuario
                        </h3>
                    </div>
                    <div>
                        <form style={{margin: '7vh 40vh 3vh 40vh'}} ref={form} onSubmit={submitform}>
                            <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                                <div className="col">
                                    <label style={{paddingBottom: '1vh'}} htmlFor='given_name'>Nombres:</label>
                                    <input type="text" className="form-control" name='given_name' placeholder="Nombres" required/>
                                </div>
                                <div className="col">
                                    <label style={{paddingBottom: '1vh'}} htmlFor='family_name'>Apellidos:</label>
                                    <input type="text" className="form-control" name='family_name' placeholder="Apellidos" required/>
                                </div>
                            </div>
                            <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                                <div className="col">
                                    <label style={{paddingBottom: '1vh'}} htmlFor='email'>Correo electrónico:</label>
                                    <input type="email" name='email' className="form-control" placeholder="E-mail" required/>
                                </div>
                                <div className="col">
                                    <label style={{paddingBottom: '1vh'}} htmlFor='tel'>Teléfono:</label>
                                    <input type="number" className="form-control" name='tel' placeholder="Celular" required/>
                                </div>
                            </div>
                            <div style={{padding: '0vh'}}>
                                <button type="submit" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginRight: '2vh', marginTop: '4vh'}}>
                                    Actualizar información
                                </button>
                                <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginTop: '4vh'}}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default ActualizarInformacion
