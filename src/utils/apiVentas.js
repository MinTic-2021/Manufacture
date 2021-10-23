import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//const baseURL = 'http://localhost:5000'
const baseURL = 'https://desolate-garden-80672.herokuapp.com'

export const obtenerVentas = async (setVentas) => {
    const options = {method: 'GET', url: `${baseURL}/gvent/`};
    
    await axios.request(options).then(function (response) {
    setVentas(response.data)
  }).catch(function (error) {
    console.error(error);
    });
}

export const crearVentas = async (ventas) => {
  const options = {
    method: 'POST',
    url: `${baseURL}/gvent`,
    headers: {'Content-Type': 'application/json'},
    data: ventas
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success('Venta registrada exitosamente')
  }).catch(function (error) {
    console.error(error);
    toast.error('Ocurrió un problema al registrar la venta')
  });
}

export const editarVenta = async(id, nuevo, total) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/gvent/${id}/`,
    headers: {'Content-Type': 'application/json'},
    data: {"productos": nuevo, "valorTotal":total}
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success('Venta editada exitosamente')
  }).catch(function (error) {
    console.error(error);
    toast.error('Ocurrió un problema al realizar la operación solicitada')
  });
}

export const estadoVenta = async(id, nuevo) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/gvent/${id}/`,
    headers: {'Content-Type': 'application/json'},
    data: {"estado": nuevo}
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success('Estado de venta cambiado exitosamente')
  }).catch(function (error) {
    console.error(error);
    toast.error('Ocurrió un problema al realizar la operación solicitada')
  });
}