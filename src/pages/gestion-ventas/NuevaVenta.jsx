import React, { useEffect, useState } from 'react';
import datos from 'productos.json';


const NuevaVenta = () => {

    const [newProduct, setNewProduct] = useState(false);
    const [filas, setFilas] = useState([]);

    useEffect(() => {
        setFilas([{idProducto:"", descripcion: "", valorUnitario: "", estado: ""}]);
    }, [])

    useEffect(() => {
        setNewProduct(false)
    }, [newProduct])

    
    const newFile = () => {
        const filaNueva = filas
        filaNueva.push({idProducto:"",descripcion:"",valorUnitario:"",estado:""})     
        setFilas(filaNueva)
        setNewProduct(false)
    }
    

    return (
        <div style={{paddingBottom: '40px'}}>
            <div className="container-sm">
                <h4 style={{paddingBottom: '20px', paddingTop: '24px', display: 'flex', justifyContent: 'center'}}>Adición de una nueva venta</h4>
                <form style={{paddingBottom: '20px'}}>
                    <div className="row">
                        <div className="col">
                        <label htmlFor='idVenta'>Identificador de venta:</label>
                        <input type="text" name='idVenta' className="form-control" placeholder="ID" required/>
                        </div>
                        <div className="col">
                        <label htmlFor='fechaVenta'>Fecha de venta:</label>
                        <input type="date" name='fechaVenta' className="form-control" required/>
                        </div>
                        <div className="col">
                        <label htmlFor='idCliente'>Id cliente:</label>
                        <input type="number" name='idCliente' className="form-control" placeholder="ID cliente" required/>
                        </div>
                        <div className="col">
                        <label htmlFor='nombreCliente'>Nombre cliente:</label>
                        <input type="text" name='nombreCliente' className="form-control" placeholder="cliente" required/>
                        </div>
                        <div className="col">
                        <label htmlFor='idVendedor'>Id vendedor:</label>
                        <input type="number" name='idVendedor' className="form-control" placeholder="vendedor"/>
                        </div>
                    </div>
                </form>
                <div>
                    <table className="table table-hover" style={{paddingLeft: '50px'}}>
                        <thead>
                            <tr>
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
                                    <tr>
                                        <td contenteditable="true">  </td>
                                        <td> </td>
                                        <td contenteditable="true"> </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                Total de la venta: <input type="text" disabled/>
                <div style={{paddingTop: '12px'}}>
                    <button type="button" onClick={() => {newFile(); setNewProduct(true)}} className="btn btn-secondary" style={{paddingTop: '0px', paddingBottom: '1px'}}>
                        Agregar producto
                    </button>
                    <button type="button" className="btn btn-secondary" style={{paddingTop: '0px', paddingBottom: '1px', marginRight: '1vh', marginLeft: '1vh'}}>
                        Eliminar
                    </button>
                    <button type="button" className="btn btn-secondary" style={{paddingTop: '0px', paddingBottom: '1px'}}>
                        Registrar venta
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NuevaVenta;
