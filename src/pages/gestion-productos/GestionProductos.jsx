import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip} from '@material-ui/core';
import { obtenerProductos } from 'utils/apiprod';
import { eliminarProducto } from 'utils/apiprod';
import { editarProducto } from 'utils/apiprod';

const GestionProductos = () => {

    const [productos, setProductos] = useState([]);
    let [busqueda, setBusqueda] = useState('')
    const [criterio, setCriterio] = useState('idProducto')
    
        const buscar = () =>{
            try{
                const filtro = []
                if(busqueda === '' || criterio === 'todo'){
                    obtenerProductos(setProductos)
                }else{
                    for (let i = 0; i < productos.length; i++){
                        if(productos[i][criterio].toLowerCase() === busqueda){
                            filtro.push(productos[i])
                        }
                    }
                    setProductos(filtro)
                }
            } catch {
                toast.error("La búsqueda no se puede realizar")
            }
        }
    
        useEffect(() => {
            // obtención datos backend
            obtenerProductos(setProductos);
        }, [])
        console.log(productos)


    return (
        <div className="container-sm">
            <h4 style={{paddingBotton: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'center'}}>
              Gestión de productos
            </h4>
            <h6>Buscar producto:</h6>
            <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                <select className="form-select form-select-sm" onChange={((e) => {setCriterio(e.target.value.toLowerCase())})} style={{width: '13%'}}>
                    <option value="idProducto">ID</option>
                    <option value="descripcion">Descripción</option>
                    <option value="todo">Mostrar todo</option>
                </select> 
                <div style={{paddingRight: '12px', paddingLeft: '12px'}}>     
                    <input onChange={((e) => {setBusqueda(e.target.value.toLowerCase())})} type="text"/>
                </div>   
                <button type="button" onClick={() => {buscar()}} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBotton: '1px'}}>
                    Buscar
                </button>
                <button type="button" onClick={() => {obtenerProductos(setProductos)}} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginLeft: '1vh'}}>
                        Limpiar
                </button>
            </div>
            <Tabla listaProductos={productos} />
        </div>
    )
}

export default GestionProductos        

const Tabla = ({listaProductos})  => {

    var sel = []
    const [reloadInfo, setReloadInfo] = useState(false)


    useEffect(() => {
        setReloadInfo(false)
    }, [reloadInfo])



    const eliminar = (sel) => {
        sel.forEach(id => eliminarProducto(id))
        window.location.reload()
        toast.success('producto eliminado exitosamente')               
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
                        <th>ID Producto</th>
                        <th>Descripción</th>
                        <th>Valor Unitario</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody style={{height: '20vh'}}>
                    {listaProductos.map((productos) => {
                        return(
                            <tr style={{height: '5vh'}} key={nanoid()}>
                                <td>
                                    <div className="form-check">
                                        <Tooltip title="Seleccionar producto">
                                            <input name='check' onClick={() => {seleccion(productos._id)}} className="form-check-input" type="checkbox"/>
                                        </Tooltip>
                                    </div>
                                </td>
                                <td>{productos.idProducto}</td>
                                <td>{productos.descripcion}</td>
                                <td>{productos.valorUnitario}</td>
                                <td style={{width: '17%', paddingTop: '0%', paddingBottom: '0%', paddingRight: '0%'}}>
                                    <select className="form-select form-select-sm" defaultValue={productos.estado} name='estado' onChange={(e) => {editarProducto(productos._id, e.target.value)}} style={{width: '80%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                        <option value="disponible">Disponible</option>
                                        <option value="noDisponible">No disponible</option>
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


