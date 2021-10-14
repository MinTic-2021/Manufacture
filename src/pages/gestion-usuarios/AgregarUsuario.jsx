import React, {useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AgregarUsuario = () => {

    const form = useRef()

    const submitform = (e) => {
        e.preventDefault()
        const fd = new FormData(form.current)
        const nuevoUsuario = {}
        fd.forEach((value, key) => {
            nuevoUsuario[key] = value
        })
        console.log(nuevoUsuario)
        toast.success('Usuario creado exitosamente')
        form.current.reset()
    }

    const limpiar = () => {
        form.current.reset()
    }

    return (
        <div style={{paddingBottom: '40px'}}>
            <div className="container-sm">
                <h3 style={{marginTop: '3vh', marginBottom: '5vh', display: 'flex', justifyContent: 'center'}}>
                    Agregar Usuario Nuevo
                </h3>
                <form style={{marginLeft: '10vh', marginRight: '10vh'}} onSubmit={submitform} ref={form}>
                    <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                        <div className="col">
                            <label htmlFor='nombre' style={{paddingBottom: '1vh'}}>Nombres:</label>
                            <input type="text" name='nombre' className="form-control" placeholder="Nombres" required />
                        </div>
                        <div className="col">
                            <label htmlFor='apellidos' style={{paddingBottom: '1vh'}}>Apellidos:</label>
                            <input name='apellidos' type="text" className="form-control" placeholder="Apellidos" required />
                        </div>
                    </div>
                    <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                        <div className="col" >
                            <label htmlFor='correo' style={{paddingBottom: '1vh'}}>Correo electrónico:</label>
                            <input name='correo' type="email" className="form-control" placeholder="E-mail" required />
                        </div>
                        <div className="col" >
                            <label htmlFor='telefono' style={{paddingBottom: '1vh'}}>Teléfono:</label>
                            <input name='telefono' type="number" className="form-control" placeholder="Celular" required />
                        </div>
                    </div>
                    <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                        <div className="col" >
                            <label htmlFor='password' style={{paddingBottom: '1vh'}}>Contraseña:</label>
                            <input name='password' type="password" className="form-control" placeholder="Password" required />
                        </div>
                        <div className="col" >
                            <label htmlFor='password2' style={{paddingBottom: '1vh'}}>Repetir contraseña:</label>
                            <input name='password2' type="password" className="form-control" placeholder="Password" required />
                        </div>
                    </div>
                    <div className="row" style={{display: 'flex', paddingBottom: '2vh'}}>
                        <div className="col" >
                            <label htmlFor='ingreso' style={{paddingBottom: '1vh'}}>Fecha de ingreso:</label>
                            <input name='ingreso' type="date" className="form-control" required/>
                        </div>
                        <div className="col" >
                            <label htmlFor='rol' style={{paddingRight: '60vh', paddingBottom: '1vh'}}>Rol:</label>
                            <select name='rol' defaultValue={0} className="form-select form-select-sm" style={{width: '30%', height: '55%'}} required>
                                <option disabled value={0}>Seleccione uno</option>
                                <option>Administrador</option>
                                <option>Vendedor</option>
                            </select>
                        </div>
                    </div>
                    <ToastContainer position="bottom-center" autoClose={5000} />
                    <div style={{marginTop: '2vh'}}>
                        <button type="submit" className="btn btn-secondary" style={{padding: '1px 3px 1px 3px'}}>
                            Agregar usuario
                        </button>
                        <button type="button" onClick={limpiar} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginLeft: '5px'}}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AgregarUsuario

