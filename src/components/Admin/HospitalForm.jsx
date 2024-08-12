// 
import { useState } from 'react';

const HospitalForm = ({ onAddHospital }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHospital = { id: Date.now(), name, location, specialty };
    onAddHospital(newHospital);
    setName('');
    setLocation('');
    setSpecialty('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h3 className="text-xl font-bold mb-4">Add New Hospital</h3>
      <input
        type="text"
        placeholder="Hospital Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Hospital
      </button>
    </form>
  );
};

export default HospitalForm;

