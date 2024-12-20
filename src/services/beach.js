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
