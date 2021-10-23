import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index';
import GestionProductos from 'pages/gestion-productos/GestionProductos';
import AgregarProducto from 'pages/gestion-productos/AgregarProducto';
import GestionUsuario from 'pages/gestion-usuarios/GestionUsuario';
import AgregarUsuario from 'pages/gestion-usuarios/AgregarUsuario';
import NuevaVenta from 'pages/gestion-ventas/NuevaVenta';
import GestionVenta from 'pages/gestion-ventas/GestionVenta';
import DetalleVenta from 'pages/gestion-ventas/DetalleVenta';
import 'bootstrap/dist/css/bootstrap.css';
import ActualizarInformacion from 'pages/ActualizarInformacion';
import {useState} from 'react';
import { ventasContext } from 'context/ventasContext';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from 'contex/userContext';
import PrivateRoute from 'components/PrivateRoute';
import { UsuarioContext } from 'contex/usuarioContext';

function App() {

  const [userData, setUserData] = useState({})
  const [usuarios, setUsuarios] = useState([])
  const [ventas, setVentas] = useState([])

  return (
    <Auth0Provider
    domain="mintinc-manufacture.us.auth0.com"
    clientId="vs5Q2z3dkLPTtisE135M4SXlHUg8WqX3"
    redirectUri='https://secure-basin-70754.herokuapp.com/bienvenida'
    audience="api-autenticacion-manufacture">
      <UserContext.Provider value={{userData, setUserData}}>
        <UsuarioContext.Provider value={{usuarios, setUsuarios}} >
        <Router>
          <Switch>
            <Route path={['/bienvenida', '/gprod-agregar', '/gprod-admin', '/gusu-agregar', '/gusu-admin', '/gven-nueva', '/gven-admin', '/gven-detalle', '/actualizar']}> 
              <PrivateLayout>
                <Switch>
                  <Route path='/bienvenida'>
                    <Inicio />
                  </Route>
                  <Route path='/gprod-agregar'>
                    <PrivateRoute roleList={'administrador'}>
                      <AgregarProducto/>
                    </PrivateRoute>
                  </Route>
                  <Route path='/gprod-admin'>
                    <PrivateRoute roleList={'administrador'}>
                      <GestionProductos />
                    </PrivateRoute>
                  </Route>
                  <Route path='/gusu-admin'>
                    <PrivateRoute roleList={'administrador'}>
                      <GestionUsuario />
                    </PrivateRoute>
                  </Route>
                  <Route path='/gusu-agregar'>
                    <PrivateRoute roleList={'administrador'}>
                      <AgregarUsuario/>
                    </PrivateRoute>
                  </Route>
                  <Route path='/gven-nueva'>
                    <PrivateRoute roleList={['administrador', 'vendedor']}>
                      <NuevaVenta/>
                    </PrivateRoute>
                  </Route>
                  <Route path='/gven-admin'>
                    <PrivateRoute roleList={['administrador', 'vendedor']}>
                      <ventasContext.Provider value = {{ventas, setVentas}}>
                        <GestionVenta />
                      </ventasContext.Provider>
                    </PrivateRoute>
                  </Route>
                  <Route path='/gven-detalle'>
                    <DetalleVenta />
                  </Route>
                  <Route path='/actualizar'>
                    <ActualizarInformacion />
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>
            <Route  path={['/', '/login', '/registro']}>
              <PublicLayout>
                <Switch>
                  <Route path='/login'>
                    <Login />
                  </Route>
                  <Route path='/registro'>
                    <Registro />
                  </Route>
                  <Route path='/'>
                    <Index />
                  </Route>
                </Switch>
              </PublicLayout>
            </Route>
          </Switch>
        </Router>
        </UsuarioContext.Provider>
      </UserContext.Provider>
    </Auth0Provider>
  );
};

export default App;