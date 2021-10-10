import React from 'react'

const GestionVenta = () => {
    return (
        <div className="container-sm" style={{paddingBottom: '40px'}}>
            <div className="container-sm">
                <h4 style={{paddingBottom: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'center'}}>
                    Gestión de ventas
                </h4>
                <h6>Buscar venta:</h6>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                    <select className="form-select form-select-sm" style={{width: '13%'}}>
                        <option value="id">ID venta</option>
                        <option value="producto">ID Cliente</option>
                        <option value="vendedor">Nombre cliente</option>
                        <option value="todo">Mostrar todo</option>
                    </select> 
                    <div style={{paddingRight: '12px', paddingLeft: '12px'}}>     
                        <input type="text"/>
                    </div>   
                    <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                        Buscar
                    </button>
                </div>                
                    <div style={{paddingTop: '20px'}}>
                    <table className="table table-hover" style={{paddingLeft: '50px'}}>
                        <thead>
                        <tr>
                            <th>ID venta</th>
                            <th>Valor total</th>
                            <th>Fecha venta</th>
                            <th>ID cliente</th>
                            <th>Nombre cliente</th>
                            <th>ID vendedor</th>
                            <th>Detalle venta</th>
                        </tr>
                        </thead>
                        <tbody style={{height: '30vh'}}>
                            <tr style={{height: '5vh'}}>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td style={{paddingTop: '5px', paddingBottom: '0%'}}>
                                    <div style={{paddingLeft: '40px', cursor: 'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{height: '5vh'}}>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td style={{paddingTop: '5px', paddingBottom: '0%'}}>
                                    <div style={{paddingLeft: '40px', cursor: 'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{height: '5vh'}}>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td style={{paddingTop: '5px', paddingBottom: '0%'}}>
                                    <div style={{paddingLeft: '40px', cursor: 'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{height: '5vh'}}>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td style={{paddingTop: '5px', paddingBottom: '0%'}}>
                                    <div style={{paddingLeft: '40px', cursor: 'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                                <tr style={{borderBottomColor: 'black', height: '5vh'}}>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td style={{paddingTop: '5px', paddingBottom: '0%'}}>
                                        <div style={{paddingLeft: '40px', cursor: 'pointer'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <h4 style={{paddingBottom: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'center'}}>
                    Estado de ventas
                </h4>
                <h6>Buscar pedido:</h6>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                    <span>ID venta</span>
                    <div style={{paddingRight: '12px', paddingLeft: '12px'}}>     
                    <input type="text"/>
                    </div>   
                    <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                        Buscar
                    </button>
                </div>
                <div style={{paddingTop: '20px'}}>
                    <table className="table table-hover" style={{paddingLeft: '50px'}}>
                        <thead>
                        <tr>
                            <th>ID venta</th>
                            <th>Descripción venta</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr style={{borderBottomColor: 'black'}}>
                                <td width= '15%'> </td>
                                    <td> </td>
                                    <td width='20%' style={{paddingTop: '0%', paddingBottom: '0%', paddingRight: '0%'}}>
                                        <select className="form-select form-select-sm" style={{width: '100%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                            <option value="id">En proceso</option>
                                            <option value="producto">Cancelada</option>
                                            <option value="vendedor">Entregada</option>
                                        </select>  
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{paddingTop: '12px', paddingBottom: '60px', display: 'flex', justifyContent: 'left'}}>
                    <button type="button" className="btn btn-secondary" onclick="alert('Información actualizada')" style={{paddingTop: '0px', paddingBottom: '1px'}}>
                        Actualizar Estado
                    </button>
                </div>

            </div>
        
    )
}

export default GestionVenta;


