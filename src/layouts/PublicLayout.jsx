import Footer from 'components/Footer'
import HeaderPublic from 'components/HeaderPublic'
import React from 'react'

const PublicLayout = ({children}) => {
    return (
        <div>
            <HeaderPublic />
            <main style={{minHeight: 'calc(100vh - 164px)'}}>{children}</main>
            <Footer />
        </div>
    )
}

export default PublicLayout;