import React, { useState, useEffect } from 'react'
import check from 'media/ok_32.png'
import { Dialog, DialogContent } from '@material-ui/core'
import { nanoid } from 'nanoid'
import { obtenerUsuarios, editarUsuario } from 'utils/api'
import { useOpenDialog } from 'contex/OpenDialog';
import { useUsuario } from 'contex/usuarioContext'

const Solicitudes = () => {

    const {usuarios} = useUsuario()
    const {setUsuarios} = useUsuario()
    const [reload, setReload] = useState(false)
    const { setOpen } = useOpenDialog()
    const { open } = useOpenDialog()
    
    useEffect(() => { 
        const traerUsuarios = async() => {
            obtenerUsuarios(setUsuarios)
        }
        traerUsuarios()
    }, [reload, setUsuarios, open])
    
    useEffect(() => {
        setReload(false)
    }, [reload])

    const handleClose = () => {
        setOpen(false)
    }

    const asignarRol = async (e, id) => {
        await editarUsuario(id, e)
        setReload(true)
    }

    const filtro = usuarios.filter(usuario => usuario.rol === "inactivo")
     
    return(
        <Dialog open={open} fullWidth maxWidth="sm" onClose={handleClose}>
            <DialogContent sytle={{overflow: 'hidden', padding: '1px'}}>

            <h4 style={{display: 'flex', justifyContent: 'center', padding: '2vh', color: '#065B5B', fontWeight: 'bold'}}>
                Solicitudes Pendientes
            </h4>
            {filtro.length > 0 ? 
                <table className="table table-hover" style={{paddingLeft: '0vh', paddingRight: '0vh', marginBottom:'3vh'}}>
                    <thead>
                        <tr>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Correo</th>
                            <th>Cargo</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize: '14.5px'}}>
                        {filtro.map(usuario => {
                            return(
                                <tr key={nanoid()}>
                                    <td>{usuario.given_name}</td>
                                    <td>{usuario.family_name}</td>
                                    <td>{usuario.email}</td>
                                    <td>
                                        <select className="form-select form-select-sm" defaultValue={usuario.rol} onChange={(e) => {asignarRol(e.target.value, usuario._id)}} style={{width: '90%', borderColor: 'rgba(255, 255, 255, 0)'}}>
                                            <option value="administrador">Administrador</option>
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
            </DialogContent>
        </Dialog>
    )
}

export default Solicitudes
