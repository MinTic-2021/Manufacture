import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//const baseURL = 'http://localhost:5000'
const baseURL = 'https://desolate-garden-80672.herokuapp.com'

const getToken = () => {
  return `Bearer ${localStorage.getItem('Token')}`
}

export const obtenerUsuarios = async (setUsuarios) => {
    const options = {
      method: 'GET',
      url: `${baseURL}/gusu/`,
      headers: {Authorization: getToken()}};
    
    await axios.request(options).then(function (response) {
    setUsuarios(response.data)
  }).catch(function (error) {
    console.error(error);
    });
}

export const obtenerDatosUsuario = async (set) => {
  const options = {
    method: 'GET',
    url: `${baseURL}/gusu/self`,
    headers: {Authorization: getToken()}};
  
  await axios.request(options).then(function (response) {
  set(response.data)
  //console.log(response.data)
}).catch(function (error) {
  console.error(error);
  });
}

export const crearUsuario = async (datos) => {
  const options = {
    method: 'POST',
    url: `${baseURL}/gusu/`,
    headers: {'Content-Type': 'application/json', Authorization: getToken()},
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

export const editarUsuario = async(id, nuevo) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/gusu/${id}/`,
    headers: {'Content-Type': 'application/json', Authorization: getToken()},
    data: {"rol": nuevo}
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success('Rol actualizado exitosamente')
  }).catch(function (error) {
    console.error(error);
    toast.error('Ocurrió un problema al realizar la operación solicitada')
  });
}

export const ActualizarUsuario = async(id, nuevo) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/gusu/${id}/`,
    headers: {'Content-Type': 'application/json', Authorization: getToken()},
    data: nuevo
  };
  console.log(id, nuevo)
  await axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success('Información actualizada exitosamente')
  }).catch(function (error) {
    console.error(error);
    toast.error('Ocurrió un problema al realizar la operación solicitada')
  });
}

export const eliminarUsuario = async(id) => {
  
  const options = {
    method: 'DELETE',
    url: `${baseURL}/gusu/${id}/`,
    headers: {'Content-Type': 'application/json', Authorization: getToken()},
    data: {"id": id}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
    toast.success('Ocurrió un error al eliminar el usuario ', id)
  });
}
