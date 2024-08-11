import { useState, useEffect } from 'react';

const mockHospitals = [
  { id: 1, name: 'Korle-Bu Teaching Hospital', location: 'Accra', specialty: 'General' },
  { id: 2, name: 'Komfo Anokye Teaching Hospital', location: 'Kumasi', specialty: 'General' },
  { id: 3, name: 'Tamale Teaching Hospital', location: 'Tamale', specialty: 'General' },
  { id: 4, name: 'Cape Coast Teaching Hospital', location: 'Cape Coast', specialty: 'General' },
  // Add more mock data
];

const useHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        setLoading(true);
        // Simulate fetching data from an API
        setTimeout(() => {
          const filteredHospitals = mockHospitals.filter(hospital => 
            (!filters.location || hospital.location === filters.location) &&
            (!filters.specialty || hospital.specialty === filters.specialty)
          );
          setHospitals(filteredHospitals);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHospitals();
  }, [filters]);

  return { hospitals, loading, error, filters, setFilters };
};

export default useHospitals;
