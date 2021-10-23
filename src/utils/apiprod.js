import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const obtenerProductos = async (setProductos) => {
    const options = {method: 'GET', url: 'http://localhost:5000/gprod/'};
    
    await axios.request(options).then(function (response) {
    setProductos(response.data)
  }).catch(function (error) {
    console.error(error);
    });
}

export const crearProductos = async (datos) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/gprod/',
    headers: {'Content-Type': 'application/json'},
    data: datos
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success('Producto creado exitosamente')
  }).catch(function (error) {
    console.error(error);
    toast.error('Ocurrió un problema al crear Producto')
  });
}

export const editarProducto = async(id, estado) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/gprod/${id}/`,
    headers: {'Content-Type': 'application/json'},
    data: {"rol": estado}
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success('Estado actualizado exitosamente')
  }).catch(function (error) {
    console.error(error);
    toast.error('Ocurrió un problema al realizar la operación solicitada')
  });
}

export const eliminarProducto = async(id) => {
  
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/gprod/${id}/`,
    headers: {'Content-Type': 'application/json'},
    data: {"id": id}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
    toast.success('Ocurrió un error al eliminar el usuario ', id)
  });
}