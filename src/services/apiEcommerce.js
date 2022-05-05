import axios from 'axios';
// axios.defaults.baseURL = 'https://fakestoreapi.com';
// export default axios;


const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
  });
  
  export default api;