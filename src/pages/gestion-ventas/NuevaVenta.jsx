import React from 'react';


const NuevaVenta = () => {

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
                        <tbody style={{height: '30vh'}}>
                            <tr>
                                <td contenteditable="true"> </td>
                                <td> </td>
                                <td contenteditable="true"> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td contenteditable="true"> </td>
                                <td> </td>
                                <td contenteditable="true"> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td contenteditable="true"> </td>
                                <td> </td>
                                <td contenteditable="true"> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td contenteditable="true"> </td>
                                <td> </td>
                                <td contenteditable="true"> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr style={{borderBottomColor: 'black'}}>
                                <td contenteditable="true"> </td>
                                <td> </td>
                                <td contenteditable="true"> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                Total de la venta: <input type="text" disabled/>
                <div style={{paddingTop: '12px'}}>
                    <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px', marginRight: '2vh'}}>
                        Agregar venta
                    </button>
                    <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>Limpiar</button>
                </div>
            </div>
        </div>
    )
}

export default NuevaVenta;
