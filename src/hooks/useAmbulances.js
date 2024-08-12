import { useState, useEffect } from 'react';

const mockAmbulances = [
  { id: 1, name: 'Ambulance Service 1', location: 'Accra' },
  { id: 2, name: 'Ambulance Service 2', location: 'Kumasi' },
  { id: 3, name: 'Ambulance Service 3', location: 'Tamale' },
  { id: 4, name: 'Ambulance Service 4', location: 'Cape Coast' },
  // Add more mock data
];

const useAmbulances = () => {
  const [ambulances, setAmbulances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchAmbulances = async () => {
      try {
        setLoading(true);
        // Simulate fetching data from an API
        setTimeout(() => {
          const filteredAmbulances = mockAmbulances.filter(ambulance => 
            (!filters.location || ambulance.location === filters.location)
          );
          setAmbulances(filteredAmbulances);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAmbulances();
  }, [filters]);

  return { ambulances, loading, error, filters, setFilters };
};

export default useAmbulances;