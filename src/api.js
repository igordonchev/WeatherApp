// api.js
import axios from 'axios';

const apiKey = 'd5ffaf58a30ebe18ca5f64b1e284543a'; // Your API key

const baseURL = 'https://api.openweathermap.org/data/2.5';

const api = axios.create({
  baseURL,
  params: {
    appid: apiKey,
    units: 'metric', // You can adjust the units as needed
  },
});

export default api;
