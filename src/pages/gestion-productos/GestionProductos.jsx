import React from 'react'

const GestionProductos = () => {
    return (
        <div class="container-sm">
            <h4 style={{paddingBotton: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'center'}}>
              Gestión de productos
            </h4>
            <h6>Buscar producto:</h6>
            <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                <select class="form-select form-select-sm" style={{width: '13%'}}>
                    <option value="nombre">ID</option>
                    <option value="rol">Descripción</option>
                    <option value="todo">Mostrar todo</option>
                </select> 
                <div style={{paddingRight: '12px', paddingLeft: '12px'}}>     
                    <input type="text"/>
                </div>   
                <button type="button" class="btn btn-secondary" style={{paddingTop: '0.8px', paddingBotton: '1px'}}>
                    Buscar
                </button>
            </div>
            <div style={{paddingTop: '20px'}}>
            <table class="table table-hover" style={{paddingLeft: '50px'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Valor unitario</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody style={{height: '20vh'}}>
                    <tr style={{height: '5vh'}}>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td width='13%' style={{paddingTop: '0%', paddingBotton: '0%', paddingRight: '0%'}}>
                            <select class="form-select form-select-sm" style={{width: '100%', borderColor:'rgba(255, 255, 255, 0)'}}>
                              <option value="mayor">Disponible</option>
                              <option value="menor">No disponible</option>
                            </select>  
                        </td>
                    </tr>
                    <tr style={{height: '5vh'}}>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td width='12%' style={{paddingTop: '0%', paddingBotton:  '0%', paddingRight: '0%'}}>
                            <select class="form-select form-select-sm" style={{width: '100%', borderColor:'rgba(255, 255, 255, 0)'}}>
                              <option value="mayor">Disponible</option>
                              <option value="menor">No disponible</option>
                            </select>  
                        </td>
                    </tr>
                    <tr style={{height: '2vh'}}>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td width='12%' style={{paddingTop: '0%', paddingBotton: '0%',  paddingRight: '0%'}}>
                            <select class="form-select form-select-sm" style={{width: '100%', borderColor:'rgba(255, 255, 255, 0)'}}>
                              <option value="mayor">Disponible</option>
                              <option value="menor">No Disponible</option>
                            </select>  
                        </td>
                    </tr>
                    <tr style={{height: '2vh'}}>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td width='12%' style={{paddingTop: '0%', paddingBotton: '0%',  paddingRight: '0%'}}>
                            <select class="form-select form-select-sm" style={{width: '100%', borderColor:'rgba(255, 255, 255, 0)'}}>
                              <option value="mayor">Disponible</option>
                              <option value="menor">No Disponible</option>
                            </select>  
                        </td>
                    </tr>
                    <tr style={{borderBottomColor: 'black', height: '5vh'}}>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td width='12%' style={{paddingTop: '0%', paddingBotton: '0%',  paddingRight: '0%'}}>
                            <select class="form-select form-select-sm" style={{width: '100%', borderColor:'rgba(255, 255, 255, 0)'}}>
                              <option value="mayor">Disponible</option>
                              <option value="menor">No Disponible</option>
                            </select>  
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style={{paddingTop: '12px'}}>
            <button type="button" class="btn btn-secondary" style={{paddingTop: '0.8px', paddingBotton: '1px', marginRight: '2vh'}}>
              Modificar
            </button>
            <button type="button" class="btn btn-secondary" onclick="alert('Producto eliminado exitosamente')" style={{paddingTop: '0.8px', paddingBotton: '1px', marginRight: '2vh'}}>
              Eliminar
            </button>          
            <button type="button" class="btn btn-secondary" onclick="alert('Información actualizada')" style={{paddingTop: '0.8px', paddingBotton: '1px'}}>
                Guardar cambios
            </button>
          </div>
        </div>
    )
}

export default GestionProductos

