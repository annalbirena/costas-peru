/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

// Función para agregar una nueva playa
export const createBeach = async (muniId, data, token) => {
  const URL = `${BASE_URL}/beaches/municipality/${muniId}`;
  try {
    const response = await axios.post(URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding beach:', error);
    return null;
  }
};

// Función para agregar una nueva playa
export const updateBeach = async (beachId, data, token) => {
  const URL = `${BASE_URL}/beaches/${beachId}`;
  try {
    const response = await axios.put(URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating beach:', error);
    return null;
  }
};

// Función para obtener playas por municipalidad
export const getBeachesByMuni = async (id) => {
  const URL = `${BASE_URL}/beaches/municipality/${id}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching beaches:', error);
    return null;
  }
};

// Función para obtener playa por Id
export const getBeachById = async (id) => {
  const URL = `${BASE_URL}/beaches/${id}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching beach:', error);
    return null;
  }
};

// Función para actualizar el estado de la marea
export const updateTideStatus = async (beachId, tideStatus, token) => {
  const URL = `${BASE_URL}/beaches/${beachId}/tideStatus`;
  try {
    const response = await axios.patch(URL, tideStatus, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tide status:', error);
    return null;
  }
};
