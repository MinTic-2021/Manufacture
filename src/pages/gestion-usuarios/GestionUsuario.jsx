import React, { useEffect, useState } from 'react'
import datos from 'datos.json'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GestionUsuario = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        // obtención datos backend
        setUsuarios(datos);
    }, [])

    return (
        <div style={{paddingBottom: '40px'}}>
            <div className="container-sm">
                <h4 style={{paddingBottom: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'center'}}>
                    Gestión de usuarios
                </h4>
                <h6>Buscar usuario:</h6>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                    <select className="form-select form-select-sm" style={{width: '13%'}}>
                        <option value="nombre">Nombre</option>
                        <option value="rol">Rol</option>
                        <option value="id">ID</option>
                        <option value="todo">Mostrar todo</option>
                    </select> 
                    <div style={{paddingRight: '12px', paddingLeft: '12px'}}>     
                        <input type="text"/>
                    </div>   
                    <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                        Buscar
                    </button>
                </div>
                <Tabla listaUsuarios={usuarios} />
            </div>
        </div>
    )
}

export default GestionUsuario

const Tabla = ({listaUsuarios})  => {

    const sel = []
    const [reloadInfo, setReloadInfo] = useState(false)

    useEffect(() => {
        setReloadInfo(false)
    }, [reloadInfo])

    const guardar = () => {
        listaUsuarios = listaUsuarios.filter(value => JSON.stringify(value) !== '{}')
        toast.success("Operación realizada con éxito")
        //enviar al backend
        console.log(listaUsuarios)
    }

    const eliminar = () => {
        const llaves = Object.values(sel)
        llaves.forEach(llave => {delete listaUsuarios[llave]})
        listaUsuarios = listaUsuarios.filter(value => JSON.stringify(value) !== '{}')
        toast.success("Operación realizada con éxito")
        setReloadInfo(true)
        //enviar al backend
        console.log(listaUsuarios)
    }

    return (
        <div style={{paddingTop: '20px'}}>
            <table className="table table-hover" style={{paddingLeft: '50px'}}>
                <thead>
                    <tr>
                        <th> </th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Fecha Ingreso</th>
                        <th style={{paddingLeft: '3vh'}}>Rol</th>
                    </tr>
                </thead>
                <tbody style={{height: '20vh'}}>
                    {listaUsuarios.map((usuario) => {
                        return(
                            <tr style={{height: '5vh'}} key={nanoid()}>
                                <td>
                                    <div className="form-check">
                                        <input name='check' onChange={(e) => {sel.push(usuario.id-1)}} className="form-check-input" type="checkbox"/>
                                    </div>
                                </td>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.telefono}</td>
                                <td>{usuario.ingreso}</td>
                                <td style={{width: '17%', paddingTop: '0%', paddingBottom: '0%', paddingRight: '0%'}}>
                                    <select className="form-select form-select-sm" defaultValue={usuario.rol} name='rol' onChange={(e) => {usuario.rol = e.target.value}} style={{width: '80%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                        <option value="administrador">Administrador</option>
                                        <option value="vendedor">Vendedor</option>
                                    </select>  
                                </td>
                            </tr>
                        )}
                    )}
                </tbody>
            </table>
            <ToastContainer position="bottom-center" autoClose={5000} />
            <div style={{paddingTop: '12px'}}>
                <button type="button" onClick={eliminar} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginRight: '4px'}}>
                    Eliminar
                </button>
                <button type="button" onClick={guardar} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginRight: '4px'}}>
                    Guardar cambios
                </button>
            </div>
        </div>
    )
}

