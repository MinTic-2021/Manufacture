import React from 'react'

const GestionUsuario = () => {
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
                <div style={{paddingTop: '20px'}}>
                    <table className="table table-hover" style={{paddingLeft: '50px'}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Rol</th>
                                <th>Teléfono</th>
                                <th>Fecha Ingreso</th>
                            </tr>
                        </thead>
                        <tbody style={{height: '20vh'}}>
                            <tr style={{height: '5vh'}}>
                                <td> </td>
                                <td> </td>
                                <td style={{width: '13%', paddingTop: '0%', paddingBottom: '0%', paddingRight: '0%'}}>
                                    <select className="form-select form-select-sm" style={{width: '100%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                        <option value="mayor">Administrador</option>
                                        <option value="menor">Vendedor</option>
                                    </select>  
                                </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr style={{height: '5vh'}}>
                                <td> </td>
                                <td> </td>
                                <td style={{paddingTop: '0%', paddingBottom: '0%', paddingRight: '0%', width: '12%'}}>
                                    <select className="form-select form-select-sm" style={{width: '100%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                        <option value="mayor">Administrador</option>
                                        <option value="menor">Vendedor</option>
                                    </select>  
                                </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr style={{height: '5vh'}}>
                                <td> </td>
                                <td> </td>
                                <td style={{paddingTop: '0%', paddingBottom: '0%', paddingRight: '0%', width: '12%'}}>
                                    <select className="form-select form-select-sm" style={{width: '100%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                        <option value="mayor">Administrador</option>
                                        <option value="menor">Vendedor</option>
                                    </select>  
                                </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr style={{height: '5vh'}}>
                                <td> </td>
                                <td> </td>
                                <td style={{paddingTop: '0vh', paddingBottom: '0vh', paddingRight: '0vh', width: '12%'}}>
                                    <select className="form-select form-select-sm" style={{width: '100%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                        <option value="mayor">Administrador</option>
                                        <option value="menor">Vendedor</option>
                                    </select>  
                                </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr style={{borderBottomColor: 'black', height : '5vh'}}>
                                <td> </td>
                                <td> </td>
                                <td style={{paddingTop: '0%', paddingBottom: '0%', paddingRight: '0%', width: '12%'}}>
                                    <select className="form-select form-select-sm" style={{width: '100%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                        <option value="mayor">Administrador</option>
                                        <option value="menor">Vendedor</option>
                                    </select>  
                                </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{paddingTop: '12px'}}>
                    <button type="button" className="btn btn-secondary" onclick="alert('Usuario eliminado exitosamente')" style={{paddingTop: '0.8px', paddingBottom: '1px', marginRight: '4px'}}>
                        Eliminar
                    </button>
                    <button type="button" className="btn btn-secondary" onclick="alert('Información actualizada')" style={{paddingTop: '0.8px', paddingBottom: '1px', marginRight: '4px'}}>
                        Guardar cambios
                    </button>
                    <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBottom: '1px'}}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GestionUsuario
