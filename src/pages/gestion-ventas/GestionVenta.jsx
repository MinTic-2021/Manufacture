import React, { useEffect, useState } from 'react'
import datos from 'ventas.json';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip, Dialog } from '@material-ui/core';


function CurrencyFormatted(N) {
    N=parseFloat(N);
    if(!isNaN(N))N=N.toFixed(2);
    else N='0.00';
    const Mstring = String (N);
    var nValor = "";
    var cont = 0;
    for(let step=0; step<Mstring.length; step++){
        nValor += Mstring.charAt(Mstring.length-step-1);
        cont += 1;
        if(cont > 5 & cont%3 === 0){
            nValor += ",";
        }
    }
    var total = "";
    for(let step=0; step<nValor.length; step++){
        total += nValor.charAt(nValor.length-step-1);
    }
    if(total.charAt(0)===","){
        total = total.slice(1);
    }
    return "$ " + total;
}

const GestionVenta = () => {
    console.log(datos[0].Productos[1].idProducto)
    const [ventas, setVentas] = useState([]);
    let [busqueda, setBusqueda] = useState('')
    const [criterio, setCriterio] = useState('idVenta')



    const buscar = () =>{
        try{
            const filtro = []
            if(busqueda === '' || criterio === 'todo'){
                console.log(ventas)
                setVentas(ventas)
            }else{
                for (let i = 0; i < ventas.length; i++){
                    console.log(ventas[i])
                    if(ventas[i][criterio].toLowerCase() === busqueda){
                        filtro.push(ventas[i])
                    }
                }
                setVentas(filtro)
            }
        } catch {
            toast.error("La búsqueda no se puede realizar")
        }
        console.log(criterio,busqueda)
    }


    useEffect(() => {
        // obtención datos backend
        setVentas(datos);
    }, [])

    return (
        <div className="container-sm" style={{paddingBottom: '40px'}}>
            <div className="container-sm">
                <h4 style={{paddingBottom: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'center'}}>
                    Gestión de ventas
                </h4>
                <h6>Buscar venta:</h6>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                    <select className="form-select form-select-sm" onChange={((e) => {setCriterio(e.target.value)})} style={{width: '13%'}}>
                        <option value="idVenta">ID venta</option>
                        <option value="idCliente">ID Cliente</option>
                        <option value="nombreCliente">Nombre cliente</option>
                        <option value="idVendedor">ID Vendedor</option>
                        <option value="todo">Mostrar todo</option>
                    </select> 
                    <div style={{paddingRight: '12px', paddingLeft: '12px'}}>     
                        <input id="input1" onChange={((e) => {setBusqueda(e.target.value.toLowerCase())})} type="text"/>
                    </div>   
                    <button type="button" onClick={() => {buscar()}} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                        Buscar
                    </button>
                    <button type="button" onClick={() => {setVentas(datos); document.getElementById("input1").value = ""}} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginLeft: '1vh'}}>
                        Limpiar
                    </button>
                </div>
                
                <Tabla listaVentas={ventas} />
                
            </div>
        </div>
    )
}

export default GestionVenta

const Tabla = ({listaVentas})  => {

    const [reloadInfo, setReloadInfo] = useState(false)
    let [open, setOpen] = useState(false)
    const [id, setId] = useState("1")

    useEffect(() => {
        setReloadInfo(false)
    }, [reloadInfo])


    const guardar = () => {
        listaVentas = listaVentas.filter(value => JSON.stringify(value) !== '{}')
        toast.success("Operación realizada con éxito")
        setReloadInfo(true)
        //enviar al backend
        console.log(listaVentas)
    }

    return (
        <div style={{paddingTop: '20px'}}>
            <table className="table table-hover" style={{paddingLeft: '50px'}}>
                <thead>
                    <tr>
                        <th>ID venta</th>
                        <th>Fecha venta</th>
                        <th>ID cliente</th>
                        <th>Nombre cliente</th>
                        <th>ID vendedor</th>
                        <th style={{textAlign: 'right', paddingRight: '30px', width:'26vh'}}>Valor total</th>
                        <th style={{paddingLeft: '3vh'}}>Estado</th>
                        <th>Detalle venta</th>
                    </tr>
                </thead>
                <tbody>
                    {listaVentas.map((ventas) => {
                        return(
                            <tr style={{height: '5vh'}} key={nanoid()}>
                                <td>{ventas.idVenta}</td>
                                <td>{ventas.fechaVenta}</td>
                                <td>{ventas.idCliente}</td>
                                <td>{ventas.nombreCliente}</td>
                                <td>{ventas.idVendedor}</td>
                                <td style={{textAlign: 'right', paddingRight: '30px', width:'26vh'}}>{CurrencyFormatted(ventas.valorTotal)}</td>
                                <td style={{width: '17%', paddingTop: '0%', paddingBottom: '0%', paddingRight: '0%'}}>
                                    <select className="form-select form-select-sm" defaultValue={ventas.estado} name='estado' onChange={(e) => {ventas.estado = e.target.value}} style={{width: '80%', borderColor: 'rgba(255, 255, 255, 0)',marginTop:'4px',marginBottom:'3px'}}>
                                        <option value="En proceso">En proceso</option>
                                        <option value="Cancelada">Cancelada</option>
                                        <option value="Entregada">Entregada</option>
                                    </select>  
                                </td>
                                <td style={{paddingTop: '5px', paddingBottom: '0%'}}>
                                    <div style={{paddingLeft: '40px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16" type="button" onClick={(e) => {setId(ventas.idVenta); setOpen(true)}} style={{cursor: 'pointer'}}>
                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        )}
                    )}
                </tbody>
            </table>
            <ToastContainer position="bottom-center" autoClose={3000} />

            <div style={{paddingTop: '12px', paddingBottom: '60px', display: 'flex', justifyContent: 'left'}}>
                    <button type="button" className="btn btn-secondary" onClick= {guardar} style={{paddingTop: '0px', paddingBottom: '1px'}}>
                        Actualizar Estado
                    </button>
            </div>

            <Dialogo open={open} setOpen={setOpen} id={id}/>
        </div>
    )
}

const Dialogo = (props) => {
    
    const sel = []
    const filtro = datos.find(venta => venta.idVenta === props.id)
    const [recarga, setRecarga] = useState(false)
    const [reloadInfo, setReloadInfo] = useState(false)

    useEffect(() => {
        setReloadInfo(false)
    }, [reloadInfo])

    useEffect(() => {
        setRecarga(false)
    }, [recarga])
    
    const total = (filtro) => {
        var x = (filtro.Productos.map((ventas) => {
            return(ventas.cantidad * ventas.valorUnitario)            
        }))
        var sum = 0;
        for(let i=0; i<x.length; i++){
            sum = sum + x[i]
        }
        return(sum)
    }

    const eliminar = () => {
        var x = (filtro.Productos.map((ventas) => {
            return(ventas.idProducto)
        }))
        for(let i=0; i<sel.length; i++){
            delete filtro.Productos[x.indexOf(sel[i])]
        }
        filtro.Productos = filtro.Productos.filter(value => JSON.stringify(value) !== '{}')
        toast.success("Operación realizada con éxito")
        setReloadInfo(true)
        //enviar al backend
        console.log(filtro.Productos)
    }

    return (
        <div>
            <Dialog open={props.open}>
                <div style={{margin: '3vh'}}>
                    <h5 style={{paddingBottom: '4px', paddingTop: '1px', display: 'flex', justifyContent: 'center'}}>Detalle de venta</h5>
                    <ul className="list-unstyled" style={{marginBottom: '3px'}}>
                        <li><b>Identificador de venta:</b> <span>{filtro.idVenta}</span></li>
                        <li><b>Fecha de venta:</b> <span>{filtro.fechaVenta}</span></li>
                        <li><b>Id cliente:</b> <span>{filtro.idCliente}</span></li>
                        <li><b>Nombre cliente:</b> <span>{filtro.nombreCliente}</span></li>
                        <li><b>Id vendedor:</b> <span>{filtro.idVendedor}</span></li>
                    </ul>
                    <div>
                        <table className="table table-hover" style={{paddingLeft: '50px'}}>
                        <thead>
                        <tr>
                            <th> </th>
                            <th width='8%'>ID</th>
                            <th width='25%'>Descripción</th>
                            <th width='12%'>Cant</th>
                            <th width='25%'>Valor unitario</th>
                            <th width='25%'>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                            {filtro.Productos.map((ventas) => {
                            return(
                                <tr style={{height: '5vh'}} key={nanoid()}>
                                    <td>
                                        <div className="form-check">
                                            <Tooltip title="Seleccionar usuario">
                                                <input name='check' onChange={(e) => {sel.push(ventas.idProducto)}} className="form-check-input" type="checkbox"/>
                                            </Tooltip>
                                        </div>
                                    </td>
                                    <td contenteditable="true">{ventas.idProducto}</td>
                                    <td>{ventas.descripción}</td>
                                    <td><input style={{textAlign: 'center', width:'30px', border: '0px', backgroundColor: 'transparent'}} onChange={(e) => {ventas.cantidad = e.target.value; setRecarga(true); toast.success("Cantidad modificada con éxito")}} placeholder={ventas.cantidad}/></td>
                                    <td>{CurrencyFormatted(ventas.valorUnitario)}</td>
                                    <td>{CurrencyFormatted(parseInt(ventas.cantidad)*parseInt(ventas.valorUnitario))}</td>
                                </tr>
                                
                            )})}
                        </tbody>
                        </table>
                    </div>
                    Total de la venta: <span>   
                        {CurrencyFormatted(total(filtro))}                                                                   
                        </span>
                    <div style={{paddingTop: '12px'}}>
                        <button type="button" onClick={eliminar} className="btn btn-secondary" onclick="alert('Venta actualizada')" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                            Eliminar
                        </button>
                        <button type="button" onClick={() => {props.setOpen(false)}} className="btn btn-secondary" onclick="alert('Venta eliminada')"style={{paddingTop: '0.8px', paddingBottom: '1px', marginLeft: '1vh', marginRight: '1vh'}}>
                            Cerrar
                        </button>
                    </div> 
                </div>
            </Dialog>
        </div>
    )
}