// src/api/apiClient.ts

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.tovtrip.com/usersvc/api/v1',
  headers: {
    accept: 'application/json',
    apikey: '037cb34d-c5ee-4169-b2fd-bec049f77ecf',
    'x-platform': 'android', // or 'ios'
  },
});

export default api;
