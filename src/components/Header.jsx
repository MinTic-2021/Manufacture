import React from 'react';
import devfull from 'media/Devfull.png'

const Header = () => {
    return (
        <header >
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "f1f1f1"}}>
                <div class="container-fluid">
                <img src={devfull} style={{height: "35px", paddingRight: "20px"}} alt="logo"/>
                <a class="navbar-brand" href="/#">Manufactura</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Ventas
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/#">Nueva venta</a></li>
                            <li><a class="dropdown-item" href="/#">Gestión venta</a></li>
                        </ul>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/#">Nuevo producto</a></li>
                            <li><a class="dropdown-item" href="/#">Gestión producto</a></li>
                        </ul>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Usuarios
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/#">Registrar usuario</a></li>
                            <li><a class="dropdown-item" href="/#">Gestión usuario</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg-end">
                    <li><a class="dropdown-item" href="/#">Solicitudes</a></li>
                    <li><a class="dropdown-item" href="/#">Actualizar información</a></li>
                    <li><a class="dropdown-item" href="/#">Cerrar sesión</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;