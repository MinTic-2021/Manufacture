import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'

const PrivateLayout = ({children}) => {
    return (
        <div>
            <Header />
            <main style={{minHeight: 'calc(100vh - 164px)'}}>{children}</main>
            <Footer />
        </div>
    );
};

export default PrivateLayout;