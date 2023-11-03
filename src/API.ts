import axios from 'axios';

const API = axios.create({
  baseURL: 'http://172.16.2.129:8000/api/v1',
});

export default API;