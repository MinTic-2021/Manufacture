import React, { useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from 'utils/api';

const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently  } = useAuth0();

    useEffect(() => {

        const fetchAuth0Token = async() => {
            const accessToken = await getAccessTokenSilently({audience: 'api-autenticacion-manufacture'})
            localStorage.setItem('Token', accessToken)
            obtenerDatosUsuario()}
            
            if(isAuthenticated){
                fetchAuth0Token()
        }
    }, [isAuthenticated, getAccessTokenSilently])

    if (isLoading) return(
        <div style={{display: 'flex', justifyContent: 'center', margin: '50vh'}} >
            <ReactLoading type={"spokes"} color={"#95CCBB"} height={'20%'} width={'20%'} />
        </div>
        ) 
        
    if (!isAuthenticated){
        return loginWithRedirect()
    }
    return <>{children}</>
}

export default PrivateRoute
