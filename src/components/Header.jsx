import React, { useState } from 'react';
import devfull from 'media/Devfull.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <header >
            <Navbar color="light" light expand="md" >
                <img src={devfull} style={{height: "35px", paddingRight: "20px", paddingLeft: "10px"}} alt="logo"/>
                <NavbarBrand href="/bienvenida">Manufactura</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Ventas
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/gven-nueva">
                            Nueva venta
                            </DropdownItem>
                            <DropdownItem href="/gven-admin">
                            Gestión venta
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Productos
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/gprod-agregar">
                            Nuevo producto
                            </DropdownItem>
                            <DropdownItem href="/gprod-admin">
                            Gestión producto
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Usuarios
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/gusu-agregar">
                            Registrar usuario
                            </DropdownItem>
                            <DropdownItem href="/gusu-admin">
                            Gestión usuario
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar style={{position: "absolute", right: "0", bottom: "0"}}>
                        <DropdownToggle nav caret>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/solicitudes">
                            Solicitudes
                            </DropdownItem>
                            <DropdownItem href="/actualizar">
                            Actualizar información
                            </DropdownItem>
                            <DropdownItem href="/">
                            Cerrar sesión
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}

export default Header;