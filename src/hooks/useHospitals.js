import { useState, useEffect } from 'react';

import { apiClient } from '../services/config';

const useHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    location: '',
    services: '',
    typeOfhospital: ''
  });

  useEffect(() => {
    // console.log('hook ', filters)
    const fetchHospitals = async () => {
      setLoading(true);
      setError(null);

      try {  
        // const params = new URLSearchParams();
        // if (filters.location) params.append('location', filters.location);
        // if (filters.services) params.append('services', filters.services);
        // if (filters.typeOfhospital) params.append('typeOfhospital', filters.typeOfhospital);

        // const response = await apiClient.get(`/users/hospitals/getallhospitals?${params.toString()}`);
        const response = await apiClient.get(`/users/hospitals/getallhospitals`);

        const data= response.data
      
        setHospitals(Array.isArray(data) ? data : []);
      } catch (err) {
        setError('Failed to fetch hospitals');
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  return { hospitals, loading, error, filters, setFilters };
};

export default useHospitals;
