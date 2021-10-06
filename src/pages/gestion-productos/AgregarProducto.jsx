import React from 'react'

const AgregarProducto = () => {
    return (
        <div className="container-sm">
            <h3 style={{marginTop: '3vh', marginBottom:'5vh', display:'flex', justifyContent: 'center'}}>
                Agregar Producto Nuevo
            </h3>
            <form style={{marginLeft:'10vh', marginRight:'10vh'}}>
                <div className="row" style={{display:'block', paddingBottom: '2vh'}}>
                    <div className="col" style={{width:'30%', paddingBottom: '2vh'}}>
                        <label style={{paddingBottom: '1vh'}}>ID del producto:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col" style={{width:'50%', paddingBotton: '2vh'}}>
                        <label style={{paddingBotton: '1vh'}}>Descripción:</label>
                        <input type="text" className="form-control" style={{height: '15vh'}}/>
                    </div>
                    <div className="col" style={{width:'30%', paddingBotton: '2vh'}}>
                        <label style={{paddingBotton: '1vh'}}>Valor unitario:</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="col" style={{width:'30%', paddingBotton: '2vh'}}>
                        <label style={{paddingBotton: '1vh', paddingRight: '20vh'}}>Estado:</label>
                        <select className="form-select form-select-sm" style={{width: '50%', height: '55%'}}>
                            <option>Disponible</option>
                            <option>No disponible</option>
                        </select>
                    </div>
                </div>
            </form>
            <div style={{margin: '2vh 0vh 0vh 10vh'}}>
                <button type="button" className="btn btn-secondary" onclick="alert('Producto agregado exitosamente')" style={{paddingTop: '0.8px', paddingBotton: '1px'}}>
                    Agregar producto
                </button>
                <button type="button" className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBotton: '1px'}}>
                    Cancelar
                </button>
            </div> 
        </div>
    )
}

export default AgregarProducto

