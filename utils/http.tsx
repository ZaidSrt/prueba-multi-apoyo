import axios from 'axios';

const baseURL = 'https://reqres.in/api'; //url base de la api
export const http = axios.create({
  baseURL,
  headers: {
    'x-api-key': 'reqres-free-v1'
  }
}); //crear conexion