import axios from 'axios';

const api = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
