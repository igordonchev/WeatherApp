// api.js
import axios from 'axios';

const apiKey = 'd358acc6ca478b3bc46d06fedae1506f'; // Replace with your actual API key
const baseURL = 'https://api.openweathermap.org/data/2.5';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  // Attach the API key to every request
  config.params = {
    ...config.params,
    appid: apiKey,
    units: 'metric', // You can adjust the units as needed
  };
  return config;
});

export default api;
