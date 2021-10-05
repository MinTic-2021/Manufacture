import React from 'react'
import devfull from 'media/Devfull.png'

const HeaderPublic = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#f1f1f1"}}>
            <div class="container-fluid" style={{display:"grid", gridTemplateColumns: "10% 80%"}}>
            <img src={devfull} style={{height: "35px", paddingRight: "20px"}} alt="logo"/>
                    <h3 class="navbar-brand" style={{marginLeft: "27vh"}}>
                        Plataforma de Gestión de Ventas e Inventario
                    </h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>                            
            </nav>
        </header>
    )
}

export default HeaderPublic;