import React, { useEffect, useState } from 'react';
//import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from '@material-ui/core';
import { obtenerProductos } from 'utils/apiprod';
import { crearVentas } from 'utils/apiVentas';


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

const NuevaVenta = () => {

    const [filas, setFilas] = useState([]);
    const [ventas, setVentas] = useState([]);
    const [recarga, setRecarga] = useState(false);
    const sel = [];
    const [productos, setProductos] = useState([{idProducto: "", descripcion: "", valorUnitario: "", estado: ""}]);

    useEffect(() => {
        setVentas([{idVenta:"",fechaVenta:"",idCliente:"",nombreCliente:"",idVendedor:"",productos:[{idProducto:"",descripcion:"",cantidad:"",valorUnitario:""}]}])
    }, [])

    
    useEffect(() => {
        setRecarga(false)
    }, [recarga])

    useEffect(() => {
        setFilas([{idProducto:"", descripcion: "", cantidad: "", valorUnitario: ""}]);
    }, [])

    console.log(filas)

    const newFile = () => {
        const filaNueva = filas
        filaNueva.push({idProducto:"",descripcion:"", cantidad: "", valorUnitario:""})     
        setFilas(filaNueva)
        setRecarga(false)
    }

    useEffect(() => {
        // obtención datos backend
        obtenerProductos(setProductos)
    }, [])

    const encontrar = (fila) => {
        var ides = []
        productos.forEach(producto => {ides.push(producto.idProducto)})
        var filtro = []
        filtro = {idProducto:"",descripcion:"",valorUnitario:""}         
        if(!ides.includes(fila.idProducto)){
            return(filtro)
        }
        else{
            filtro = productos.filter(producto => producto.idProducto.includes(fila.idProducto))
            return(filtro[0])
        }         
    }

    const total = (filas) => {
        var x = (filas.map((fila) => {
            return(fila.cantidad * encontrar(fila).valorUnitario)            
        }))
        var sum = 0;
        for(let i=0; i<x.length; i++){
            sum = sum + x[i]
        }
        return(sum)
    }

    const enviarDatos = (ventas) => {
        // enviar al backend
        ventas[0].estado = "En proceso"
        ventas[0].productos = filas
        var total = []
        ventas[0].productos.forEach(elem => {total.push(elem.cantidad*elem.valorUnitario)})
        var sum = 0
        for(let i=0; i<total.length; i++){
            sum = sum + total[i]
        }
        ventas[0].valorTotal = sum
        crearVentas(ventas[0])
        console.log("mis ventas",ventas)
        window.location.reload()
        
    }

    const eliminar = () => {
        var x = (filas.map((fila) => {
            return(fila.idProducto)
        }))
        for(let i=0; i<sel.length; i++){
            delete filas[x.indexOf(sel[i])]
        }
        console.log(filas)
        var filasN = filas.filter(value => value !== '{}')
        setFilas(filasN)
        console.log(filasN)
        toast.success("Operación realizada con éxito")
        setRecarga(true)
    }

    

    return (
        <div style={{paddingBottom: '40px'}}>
            <div className="container-sm">
                <h4 style={{paddingBottom: '20px', paddingTop: '24px', display: 'flex', justifyContent: 'center'}}>Adición de una nueva venta</h4>
                <form style={{paddingBottom: '20px'}}>
                    <div className="row">
                        <div className="col">
                        <label htmlFor='idVenta'>Identificador de venta:</label>
                        <input type="text" name='idVenta' onChange={(e) => {ventas[0].idVenta = e.target.value; console.log("mi idVenta",ventas.idVenta)}} className="form-control" placeholder="ID" required/>
                        </div>
                        <div className="col">
                        <label htmlFor='fechaVenta'>Fecha de venta:</label>
                        <input type="date" name='fechaVenta' onChange={(e) => {ventas[0].fechaVenta = e.target.value}} className="form-control" required/>
                        </div>
                        <div className="col">
                        <label htmlFor='idCliente'>Id cliente:</label>
                        <input type="number" name='idCliente' onChange={(e) => {ventas[0].idCliente = e.target.value}} className="form-control" placeholder="ID cliente" required/>
                        </div>
                        <div className="col">
                        <label htmlFor='nombreCliente'>Nombre cliente:</label>
                        <input type="text" name='nombreCliente' onChange={(e) => {ventas[0].nombreCliente = e.target.value}} className="form-control" placeholder="cliente" required/>
                        </div>
                        <div className="col">
                        <label htmlFor='idVendedor'>Id vendedor:</label>
                        <input type="number" name='idVendedor' onChange={(e) => {ventas[0].idVendedor = e.target.value}} className="form-control" placeholder="vendedor"/>
                        </div>
                    </div>
                </form>
                <div>
                    <table className="table table-hover" style={{paddingLeft: '50px'}}>
                        <thead>
                            <tr>
                                <th width='3%'> </th>
                                <th width='8%'>ID</th>
                                <th width='25%'>Descripción</th>
                                <th width='12%'>Cantidad</th>
                                <th width='15%'>Valor unitario</th>
                                <th width='15%'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filas.map((fila) => {
                                return(
                                    <tr /*key={nanoid()}*/ >
                                        <td>
                                            <div className="form-check">
                                                <Tooltip title="Seleccionar producto">
                                                    <input name='check' onChange={(e) => {sel.push(fila.idProducto)}} className="form-check-input" type="checkbox"/>
                                                </Tooltip>
                                            </div>
                                        </td>
                                        <td><input style={{textAlign: 'left', width:'60px', border: '0px', backgroundColor: 'transparent'}} value={fila.idProducto} onChange={(e) => {fila.idProducto = e.target.value; setRecarga(true); console.log(e.target.value)}} />  </td>
                                        <td> {fila.descripcion = encontrar(fila).descripcion} </td>
                                        <td> <input style={{textAlign: 'center', width:'70px', border: '0px', backgroundColor: 'transparent'}} value={fila.cantidad} onChange={(e) => {fila.cantidad = e.target.value; setRecarga(true)}}/> </td>
                                        <td> {CurrencyFormatted(fila.valorUnitario = encontrar(fila).valorUnitario)} </td>
                                        <td> {CurrencyFormatted(parseInt(fila.cantidad)*parseInt(encontrar(fila).valorUnitario))} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                Total de la venta: <span>   
                        {CurrencyFormatted(total(filas))}                                                                   
                        </span>

                <div style={{paddingTop: '12px'}}>
                    <button type="button" onClick={() => {newFile(); setRecarga(true)}} className="btn btn-secondary" style={{paddingTop: '0px', paddingBottom: '1px'}}>
                        Agregar producto
                    </button>
                    <button type="button" onClick={() => {eliminar()}} className="btn btn-secondary" style={{paddingTop: '0px', paddingBottom: '1px', marginRight: '1vh', marginLeft: '1vh'}}>
                        Eliminar
                    </button>
                    <button type="button" onClick={() => {enviarDatos(ventas)}} className="btn btn-secondary" style={{paddingTop: '0px', paddingBottom: '1px'}}>
                        Registrar venta
                    </button>
                </div>
                <ToastContainer position="bottom-center" autoClose={3000} />
            </div>
        </div>
    )
}

export default NuevaVenta;
