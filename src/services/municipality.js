/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

// Función para autenticar municipalidad
export const authenticateMuni = async (email, password) => {
  try {
    const data = {
      email,
      password,
    };
    const response = await axios.post(`${BASE_URL}/municipalities/login`, data);
    return response.data;
  } catch (error) {
    console.error('Error authenticating municipality:', error);
    return null;
  }
};

// Función para una municipalidad por id
export const getMuniById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/municipalities/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching municipality:', error);
    return null;
  }
};

// Actualizar datos de municipalidad
export const updateMuni = async (muniId, data, token) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/municipalities/${muniId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error updating municipality:', error);
    return null;
  }
};
