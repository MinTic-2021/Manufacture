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

function App() {

  const [ventas, setVentas] = useState([])

  return (
    <Router>
      <Switch>
        <Route path={['/bienvenida', '/gprod-agregar', '/gprod-admin', '/gusu-agregar', '/gusu-admin', '/gven-nueva', '/gven-admin', '/gven-detalle', '/actualizar']}> 
          <PrivateLayout>
            <Switch>
              <Route path='/bienvenida'>
                <Inicio />
              </Route>
              <Route path='/gprod-agregar'>
                <AgregarProducto/>
              </Route>
              <Route path='/gprod-admin'>
                <GestionProductos />
              </Route>
              <Route path='/gusu-admin'>
                <GestionUsuario />
              </Route>
              <Route path='/gusu-agregar'>
                <AgregarUsuario/>
              </Route>
              <Route path='/gven-nueva'>
                <NuevaVenta/>
              </Route>
              <Route path='/gven-admin'>
                <ventasContext.Provider value = {{ventas, setVentas}}>
                  <GestionVenta />
                </ventasContext.Provider>
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
  );
};

export default App;