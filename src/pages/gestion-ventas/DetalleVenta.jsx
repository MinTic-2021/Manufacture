import React from 'react'

const DetalleVenta = () => {
    return (
        <div>
            <div className="container-sm">
            <h4 style={{paddingBottom: '20px', paddingTop: '24px', display: 'flex', justifyContent: 'center'}}>Detalle de venta</h4>
                <ul className="list-unstyled">
                    <li><b>Identificador de venta:</b> <span>DF001</span></li>
                    <li><b>Fecha de venta:</b> <span>02/10/2021</span></li>
                    <li><b>Id cliente:</b> <span>85093573</span></li>
                    <li><b>Nombre cliente:</b> <span>Edgardo Cadavid Machado</span></li>
                    <li><b>Id vendedor:</b> <span>1110765789</span></li>
                </ul>  
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
                    <button type="button" className="btn btn-secondary" onclick="alert('Venta actualizada')" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                        Modificar
                    </button>
                    <button type="button" className="btn btn-secondary" onclick="alert('Venta eliminada')"style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                        Eliminar
                    </button>
                    <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                        Cancelar
                    </button>
                </div>
            </div>            

        </div>
    )
}

export default DetalleVenta;

