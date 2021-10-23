import { useUser } from 'contex/userContext'
import React from 'react'

const PrivateRoute = ({ roleList, children }) => {
    
    const { userData } = useUser()
    
    if(roleList.includes(userData.rol)){
        return children
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh', fontSize: '5vh', fontWeight: 'bold', color: '#2C4B44'}}>
            Lo sentimos, usted no está autorizado para acceder a este sitio
        </div>
    )
}

export default PrivateRoute
