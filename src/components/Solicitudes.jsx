import React, { useState, useEffect } from 'react'
import check from 'media/ok_32.png'
import { Dialog } from '@material-ui/core'
import { nanoid } from 'nanoid'
import { obtenerUsuarios, editarUsuario } from 'utils/api'
import { useOpenDialog } from 'contex/OpenDialog';

const Solicitudes = () => {

    const [usuarios, setUsuarios] = useState([])
    const [reload, setReload] = useState(false)
    const { setOpen } = useOpenDialog()
    const { open } = useOpenDialog()

    useEffect(() => {
        setReload(false)
    }, [reload])

    useEffect(() => { 
        const traerUsuarios = async() => {
            obtenerUsuarios(setUsuarios)
        }
        traerUsuarios()
    }, [])

    const handleClose = () => {
        setOpen(false)
    }

    const filtro = usuarios.filter(usuario => usuario.rol === "inactivo")
     
    return(
        <Dialog open={open} fullWidth={true} maxWidth="sm" onClose={handleClose}>
            <h4 style={{display: 'flex', justifyContent: 'center', padding: '2vh', color: '#065B5B', fontWeight: 'bold'}}>
                Solicitudes Pendientes
            </h4>
            {filtro.length > 0 ? 
                <table className="table table-hover" style={{marginLeft: '3vh', marginRight: '3vh', marginBottom:'3vh'}}>
                    <thead>
                        <tr>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Correo</th>
                            <th>Cargo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtro.map(usuario => {
                            return(
                                <tr key={nanoid()}>
                                    <td>{usuario.given_name}</td>
                                    <td>{usuario.family_name}</td>
                                    <td>{usuario.email}</td>
                                    <td>
                                        <select className="form-select form-select-sm" defaultValue={usuario.rol} onChange={(e) => {editarUsuario(usuario._id, e.target.value); setReload(true)}} style={{width: '90%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                            <option value="admininistrador">Administrador</option>
                                            <option value="vendedor">Vendedor</option>
                                            <option value="inactivo">Inactivo</option>
                                        </select>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> :
                <span style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold', paddingBottom: '2vh'}}>
                    <img src={check} alt="Check" style={{width: '5%', paddingRight: '1vh'}}/>
                    No hay solicitudes pendientes
                </span> }
        </Dialog>
    )
}

export default Solicitudes
