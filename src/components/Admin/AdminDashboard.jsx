// 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AmbulanceForm from './AdminLogin';
import HospitalForm from './HospitalForm';

const mockHospitals = [
  { id: 1, name: 'Korle-Bu Teaching Hospital', location: 'Accra', specialty: 'General' },
  { id: 2, name: 'Komfo Anokye Teaching Hospital', location: 'Kumasi', specialty: 'General' },
  // Add more mock data
];

const mockAmbulances = [
  { id: 1, name: 'Ambulance Service 1', location: 'Accra' },
  { id: 2, name: 'Ambulance Service 2', location: 'Kumasi' },
  // Add more mock data
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [hospitals, setHospitals] = useState(mockHospitals);
  const [ambulances, setAmbulances] = useState(mockAmbulances);
  const [showHospitalForm, setShowHospitalForm] = useState(false);
  const [showAmbulanceForm, setShowAmbulanceForm] = useState(false);

  const handleLogout = () => {
    // logoutAdmin();
    navigate('/');
  };
  

  const handleDeleteHospital = (id) => {
    setHospitals(hospitals.filter(hospital => hospital.id !== id));
  };

  const handleDeleteAmbulance = (id) => {
    setAmbulances(ambulances.filter(ambulance => ambulance.id !== id));
  };

  const handleEditHospital = (id) => {
    // Edit hospital logic
    console.log(`Editing hospital with id: ${id}`);
  };

  const handleEditAmbulance = (id) => {
    // Edit ambulance logic
    console.log(`Editing ambulance with id: ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Hospitals</h2>
      <button
        onClick={() => setShowHospitalForm(!showHospitalForm)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {showHospitalForm ? 'Hide Form' : 'Add New Hospital'}
      </button>
      
      {showHospitalForm && <HospitalForm onAddHospital={handleAddHospital} />}
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital.id} className="mb-4">
            <div className="flex justify-between items-center">
              <span>{hospital.name}</span>
              <div>
                <button 
                  onClick={() => handleEditHospital(hospital.id)} 
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteHospital(hospital.id)} 
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Ambulances</h2>
      <ul>
        {ambulances.map(ambulance => (
          <li key={ambulance.id} className="mb-4">
            <div className="flex justify-between items-center">
              <span>{ambulance.name}</span>
              <div>
                <button 
                  onClick={() => handleEditAmbulance(ambulance.id)} 
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteAmbulance(ambulance.id)} 
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
