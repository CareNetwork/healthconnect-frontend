import { useState, useEffect } from 'react';


import { apiClient } from '../services/config';

// const mockAmbulances = [
//   { id: 1, name: 'Ambulance Service 1', location: 'Accra' },
//   { id: 2, name: 'Ambulance Service 2', location: 'Kumasi' },
//   { id: 3, name: 'Ambulance Service 3', location: 'Tamale' },
//   { id: 4, name: 'Ambulance Service 4', location: 'Cape Coast' },
//   // Add more mock data
// ];

const useAmbulances = () => {
  const [ambulances, setAmbulances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    location: '',
  });

  // 
  
  useEffect(() => {
    console.log('hook ', filters)
    const fetchAmbulances = async () => {
      setLoading(true);
      setError(null);

      try {  

        const response = await apiClient.get(`/ambulances/getallambulances`);

        const data= response.data
      
        setAmbulances(Array.isArray(data) ? data : []);
      } catch (err) {
        setError('Failed to fetch ambulances');
      } finally {
        setLoading(false);
      }
    };


    fetchAmbulances();
  }, [filters]);

  return { ambulances, loading, error, filters, setFilters };
};

export default useAmbulances;