import React, {useRef} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { crearProductos } from 'utils/apiprod';


const AgregarProducto = () => {
    const form = useRef(null)

    const submitform = (e) => {
        e.preventDefault()
        const fd = new FormData(form.current) //atrapar la info
        const nuevoProducto = {}
        fd.forEach((value, key) => {
            nuevoProducto[key] = value
        })
        crearProductos(nuevoProducto)
        form.current.reset()
    }

    const limpiar = () => {
        form.current.reset()
    }
    return (
        <div className="container-sm">
            <h3 style={{marginTop: '3vh', marginBottom:'5vh', display:'flex', justifyContent: 'center'}}>
                Agregar Producto Nuevo
            </h3>
            <form style={{marginLeft:'10vh', marginRight:'10vh'}} onSubmit={(e) => {submitform(e)}} ref={form}>
                <div className="row" style={{display:'block', paddingBottom: '2vh'}}>
                    <div className="col" style={{width:'30%', paddingBottom: '2vh'}}>
                        <label htmlForm='idProducto' style={{paddingBottom: '1vh'}}>ID del producto:</label>
                        <input name='idProducto' type="text" className="form-control" placeholder="ID" required/>
                    </div>
                    <div className="col" style={{width:'50%', paddingBotton: '2vh'}}>
                        <label htmlForm='descripcion' style={{paddingBotton: '1vh'}} placeholder="Agregue detalles del producto">Descripción:</label>
                        <input name='descripcion' type="text" className="form-control" style={{height: '15vh'}} />
                    </div>
                    <div className="col" style={{width:'30%', paddingBotton: '2vh'}}>
                        <label htmlForm='valorUnitario'style={{paddingBotton: '1vh'}}>Valor unitario:</label>
                        <input name='valorUnitario' type="number" className="form-control" placeholder="valor" required/>
                    </div>
                    <div className="col" style={{width:'30%', paddingBotton: '2vh'}}>
                        <label htmlForm='estado' style={{paddingBotton: '1vh', paddingRight: '20vh'}}>Estado:</label>
                        <select name='estado' defaultValue={0} className="form-select form-select-sm" style={{width: '50%', height: '55%'}} required>
                            <option disabled value={0}>Seleccione uno</option>
                            <option value="disponible">Disponible</option>
                            <option value="noDisponible">No disponible</option>
                        </select>
                    </div>
                </div>
            <ToastContainer position="bottom-center" autoClose={5000} />
                <div style={{margin: '2vh 0vh 0vh 10vh'}}>
                    <button type="submit" className="btn btn-secondary"  style={{paddingTop: '0.8px', paddingBotton: '1px', marginRight: '2vh'}}>
                        Agregar producto
                    </button>
                    <button type="button" onClick={limpiar} className="btn btn-secondary" style={{paddingTop: '0.8px', paddingBotton: '1px'}}>
                        Cancelar
                    </button>
                </div> 
            </form>
     </div>
    )
}

export default AgregarProducto

