import React, { useEffect, useState } from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'contex/userContext';

const PrivateLayout = ({children}) => {

    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently  } = useAuth0()
    const [loadingUserInformation, setLoadingUserInformation] = useState(false)
    const { setUserData } = useUser() 

    useEffect(() => {

        const fetchAuth0Token = async() => {
            setLoadingUserInformation(true)
            const accessToken = await getAccessTokenSilently({audience: 'api-autenticacion-manufacture'})
            setLoadingUserInformation(false)
            localStorage.setItem('Token', accessToken)
            obtenerDatosUsuario(setUserData)
        }
            
        if(isAuthenticated){
            fetchAuth0Token()
        }
    }, [isAuthenticated, getAccessTokenSilently, setUserData])

    if (isLoading || loadingUserInformation) return(
        <div style={{display: 'flex', justifyContent: 'center', margin: '50vh'}} >
            <ReactLoading type={"spokes"} color={"#95CCBB"} height={'20%'} width={'20%'} />
        </div>
        ) 
        
    if (!isAuthenticated){
        return loginWithRedirect()
    }

    return (
            <div>
                <Header />
                <main style={{minHeight: 'calc(100vh - 164px)'}}>{children}</main>
                <Footer />
            </div>
    );
};

export default PrivateLayout;