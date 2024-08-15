// src/services/hospitalService.js
import api from './api';  // import the axios instance

export const fetchHospitals = async () => {
  return api.get('/hospitals');
};

export const fetchHospitalById = async (id) => {
  return api.get(`/hospitals/${id}`);
};

export const createHospital = async (hospitalData) => {
  return api.post('/hospitals', hospitalData);
};

export const updateHospital = async (id, hospitalData) => {
  return api.patch(`/hospitals/${id}`, hospitalData);
};
