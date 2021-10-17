import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    if (isLoading) return <div>Loading...</div>
    if (!isAuthenticated){
        return loginWithRedirect()
    }
    return <>{children}</>
}

export default PrivateRoute
