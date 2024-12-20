/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const apiConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
};

export const apiClientMultipart = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  timeout: apiConfig.timeout,
});
