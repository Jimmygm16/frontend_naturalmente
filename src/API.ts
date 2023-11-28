import axios from 'axios';

axios.defaults.withCredentials = true;

const API = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

API.interceptors.response.use((response) => {
  console.log(response.data);
  return response;
})

export default API;
