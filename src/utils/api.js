import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const obtenerUsuarios = async (setUsuarios) => {
    const options = {method: 'GET', url: 'http://localhost:5000/gusu/admin'};
    
    await axios.request(options).then(function (response) {
    setUsuarios(response.data)
  }).catch(function (error) {
    console.error(error);
    });
}

export const crearUsuario = async (datos) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/gusu/nuevo',
    headers: {'Content-Type': 'application/json'},
    data: datos
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success('Usuario creado exitosamente')
  }).catch(function (error) {
    console.error(error);
    toast.error('Ocurrió un problema al crear el usuario')
  });
}

export const editarUsuario = async(datos) => {
  const options = {
    method: 'PATCH',
    url: 'http://localhost:5000/gusu/editar',
    headers: {'Content-Type': 'application/json'},
    data: datos
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success('Rol actualizado exitosamente')
  }).catch(function (error) {
    console.error(error);
    toast.error('Ocurrió un problema al realizar la operación solicitada')
  });
}

export const eliminarUsuario = async(id) => {
  
  const options = {
    method: 'DELETE',
    url: 'http://localhost:5000/gusu/eliminar',
    headers: {'Content-Type': 'application/json'},
    data: {"id": id}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success('usuario eliminado exitosamente')
  }).catch(function (error) {
    console.error(error);
    toast.success('Ocurrió un error al eliminar el usuario ', id)
  });
}
