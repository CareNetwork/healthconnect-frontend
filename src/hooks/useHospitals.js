import { useState, useEffect } from 'react';
import { fetchHospitals } from '../services/hospitalService'; // Ensure the correct path to the service file

const useHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    region: '',
    specialty: '',
    type: ''
  });

  useEffect(() => {
    const loadHospitals = async () => {
      setLoading(true);
      try {
        const response = await fetchHospitals(filters);
        setHospitals(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadHospitals();
  }, [filters]);

  return { hospitals, loading, error, filters, setFilters };
};

export default useHospitals;
