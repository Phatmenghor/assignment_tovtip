import Config from 'react-native-config';
import axios from 'axios';

const api = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 100000,
  headers: {
    accept: 'application/json',
    apikey: Config.APIKEY,
    'x-platform': 'android',
  },
});

export default api;
