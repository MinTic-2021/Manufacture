import React, { useEffect, useState } from 'react';
import datos from 'datos.json';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip, Dialog } from '@material-ui/core';

const GestionUsuario = () => {

    const [usuarios, setUsuarios] = useState([]);
    let [busqueda, setBusqueda] = useState('')
    const [criterio, setCriterio] = useState('nombre')

    const buscar = () =>{
        try{
            const filtro = []
            if(busqueda === '' || criterio === 'todo'){
                console.log(datos)
                setUsuarios(datos)
            }else{
                for (let i = 0; i < usuarios.length; i++){
                    if(usuarios[i][criterio].toLowerCase() === busqueda){
                        filtro.push(usuarios[i])
                    }
                }
                setUsuarios(filtro)
            }
        } catch {
            toast.error("La búsqueda no se puede realizar")
        }
    }

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
                    <select className="form-select form-select-sm" onChange={((e) => {setCriterio(e.target.value.toLowerCase())})} style={{width: '13%'}}>
                        <option value="nombre">Nombre</option>
                        <option value="rol">Rol</option>
                        <option value="id">ID</option>
                        <option value="todo">Mostrar todo</option>
                    </select> 
                    <div style={{paddingRight: '12px', paddingLeft: '12px'}}>     
                        <input onChange={((e) => {setBusqueda(e.target.value.toLowerCase())})} type="text" style={{borderRadius: '5px', border: '1px solid #C0C6C7', height: '4.7vh'}}/>
                    </div>   
                    <button type="button" onClick={() => {buscar()}} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                        Buscar
                    </button>
                    <button type="button" onClick={() => {setUsuarios(datos)}} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginLeft: '1vh'}}>
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

    const sel = []
    const [reloadInfo, setReloadInfo] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setReloadInfo(false)
    }, [reloadInfo])

    const guardar = () => {
        listaUsuarios = listaUsuarios.filter(value => JSON.stringify(value) !== '{}')
        toast.success("Operación realizada con éxito")
        setOpen(false)
        //enviar al backend
        console.log(listaUsuarios)
    }

    const eliminar = () => {
        sel.forEach(llave => {delete listaUsuarios[llave]})
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
                                            <input name='check' onChange={(e) => {sel.push(usuario.id-1)}} className="form-check-input" type="checkbox"/>
                                        </Tooltip>
                                    </div>
                                </td>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.telefono}</td>
                                <td>{usuario.correo}</td>
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
                <button type="button" onClick={() => {setOpen(true)}} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginRight: '4px'}}>
                    Guardar cambios
                </button>
            </div>
            <Dialog open={open}>
                <div style={{margin: '3vh'}}>
                    <h6>¿Desea confirmar los cambios?</h6>
                    <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: '2vh'}}>
                        <button onClick={guardar} style={{width: '10vh', borderRadius: '0.7vh', border: '1px solid gray', backgroundColor: '#515C5F', color: 'white'}}>
                            Sí
                        </button>
                        <button onClick={() => {setOpen(false)}} style={{width: '10vh', borderRadius: '0.7vh', border: '1px solid gray', backgroundColor: '#515C5F', color: 'white'}}>
                            No
                        </button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

