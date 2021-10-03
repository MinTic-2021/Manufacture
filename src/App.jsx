import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ActualizarInformacion from './pages/ActualizarInformacion';
import AgregarProducto from './pages/Gestion Productos/AgregarProducto';
import GestionProductos from './pages/Gestion Productos/GestionProductos';
import DetalleVenta from './pages/Gestion Ventas/DetalleVenta';
import GestionVenta from './pages/Gestion Ventas/GestionVenta';
import NuevaVenta from './pages/Gestion Ventas/NuevaVenta';
import AgregarUsuario from './pages/Gestión Usuarios/AgregarUsuario';
import GestionUsuario from './pages/Gestión Usuarios/GestionUsuario';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/agregarproducto'>
          <AgregarProducto/>
        </Route>
        <Route path='/gestionproductos'>
          <GestionProductos/>
        </Route>
        <Route path='/agregarusuario'>
          <AgregarUsuario/>
        </Route>
        <Route path='/gestionusuario'>
          <GestionUsuario/>
        </Route>
        <Route path='/detalleventa'>
          <DetalleVenta/>
        </Route>
        <Route path='/gestionventa'>
          <GestionVenta/>
        </Route>
        <Route path='/nuevaventa'>
          <NuevaVenta/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/actualizarinformacion'>
          <ActualizarInformacion/>
        </Route>
        <Route path='/registro'>
          <Registro/>
        </Route>
        <Route path='/'>
          <Inicio/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
