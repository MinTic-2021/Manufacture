import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PrivateRoute from 'components/PrivateRoute'

const PrivateLayout = ({children}) => {
    return (
        <PrivateRoute>
            <div>
                <Header />
                <main style={{minHeight: 'calc(100vh - 164px)'}}>{children}</main>
                <Footer />
            </div>
        </PrivateRoute>
    );
};

export default PrivateLayout;