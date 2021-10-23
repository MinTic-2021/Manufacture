import React, { useEffect, useState } from 'react';
import { obtenerUsuarios, editarUsuario, eliminarUsuario } from 'utils/api';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from '@material-ui/core';
import { useUsuario } from 'contex/usuarioContext';

const GestionUsuario = () => {
    
    const {usuarios} = useUsuario()
    const {setUsuarios} = useUsuario()
    let [busqueda, setBusqueda] = useState('')
    const [criterio, setCriterio] = useState('nombre')

    const buscar = () =>{
        try{
            const filtro = []
            if(busqueda === '' || criterio === 'todo'){
                obtenerUsuarios(setUsuarios)
            }else{
                for (let i = 0; i < usuarios.length; i++){
                    if(usuarios[i][criterio].toLowerCase().includes(busqueda)){
                        filtro.push(usuarios[i])
                    }
                }
                setUsuarios(filtro)
            }
        } catch {
            toast.error("Ocurrió un error al realizar la búsqueda")
        }
    }
    
    useEffect(() => {
        obtenerUsuarios(setUsuarios);
    }, [setUsuarios])

    return (
        <div style={{paddingBottom: '40px'}}>
            <div className="container-sm">
                <h4 style={{paddingBottom: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'center'}}>
                    Gestión de usuarios
                </h4>
                <h6>Buscar usuario:</h6>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                    <select className="form-select form-select-sm" onChange={((e) => {setCriterio(e.target.value.toLowerCase())})} style={{width: '13%'}}>
                        <option value="given_name">Nombre</option>
                        <option value="rol">Rol</option>
                        <option value="_id">ID</option>
                        <option value="todo">Mostrar todo</option>
                    </select> 
                    <div style={{paddingRight: '12px', paddingLeft: '12px'}}>     
                        <input onChange={((e) => {setBusqueda(e.target.value.toLowerCase())})} type="text" style={{borderRadius: '5px', border: '1px solid #C0C6C7', height: '4.7vh'}}/>
                    </div>   
                    <button type="button" onClick={() => {buscar()}} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                        Buscar
                    </button>
                    <button type="button" onClick={() => {obtenerUsuarios(setUsuarios)}} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginLeft: '1vh'}}>
                        Limpiar
                    </button>
                </div>
                <Tabla listaUsuarios={usuarios} />
            </div>
        </div>
    )
}

export default GestionUsuario

const Tabla = ({listaUsuarios})  => {

    var sel = []
    const [reloadInfo, setReloadInfo] = useState(false)

    useEffect(() => {
        setReloadInfo(false)
    }, [reloadInfo])

    const eliminar = (sel) => {
        sel.forEach(id => eliminarUsuario(id))
        window.location.reload()
        toast.success('usuario eliminado exitosamente')               
    }

    const seleccion = (id) => {
        sel.push(id)
        if((sel.filter(el => el === id)).length > 1){
            sel = sel.filter(el => el !== id)
        }
    }

    return (
        <div style={{paddingTop: '20px'}}>
            <table className="table table-hover" style={{paddingLeft: '50px'}}>
                <thead>
                    <tr>
                        <th> </th>
                        <th>ID</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Teléfono</th>
                        <th>Correo electrónico</th>
                        <th>Fecha Ingreso</th>
                        <th style={{paddingLeft: '3vh'}}>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {listaUsuarios.map((usuario) => {
                        return(
                            <tr style={{height: '5vh'}} key={nanoid()}>
                                <td>
                                    <div className="form-check">
                                        <Tooltip title="Seleccionar usuario">
                                            <input name='check' onClick={() => {seleccion(usuario._id)}} className="form-check-input" type="checkbox"/>
                                        </Tooltip>
                                    </div>
                                </td>
                                <td>{usuario._id.slice(15)}</td>
                                <td>{usuario.given_name}</td>
                                <td>{usuario.family_name}</td>
                                <td>{usuario.tel}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.ingreso}</td>
                                <td style={{width: '17%', paddingTop: '0%', paddingBottom: '0%', paddingRight: '0%'}}>
                                    <select className="form-select form-select-sm" defaultValue={usuario.rol} name='rol' onChange={(e) => {editarUsuario(usuario._id, e.target.value)}} style={{width: '80%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                        <option value="administrador">Administrador</option>
                                        <option value="vendedor">Vendedor</option>
                                        <option value="inactivo">Inactivo</option>
                                    </select>  
                                </td>
                            </tr>
                        )}
                    )}
                </tbody>
            </table>
            <ToastContainer position="bottom-center" autoClose={5000} />
            <div style={{paddingTop: '12px'}}>
                <button type="button" onClick={() => {eliminar(sel)}} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginRight: '4px'}}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

