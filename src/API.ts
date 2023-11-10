import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost/api_rest_naturalmente/public/api/v1',
});

export default API;