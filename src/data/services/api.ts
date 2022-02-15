import axios from "axios";
import { parseCookies } from "nookies";

const { 'finas-cripto-token': token } = parseCookies()

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

// console.log('token Bearer' + token)

if(token) {
   api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
