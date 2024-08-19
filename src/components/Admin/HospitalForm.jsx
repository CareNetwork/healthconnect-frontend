import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const HospitalForm = ({ onAddHospital }) => {
  const [hospitalName, setHospitalName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [services, setServices] = useState('inpatient');
  const [hospitalType, setHospitalType] = useState('government'); // New state for Hospital Type
  const [bedsAvailable, setBedsAvailable] = useState('');
  const [totalDoctors, setTotalDoctors] = useState('');
  const [totalNurses, setTotalNurses] = useState('');
  const [totalEmergencyUnits, setTotalEmergencyUnits] = useState('');
  const [image, setImage] = useState('');
  const [hasMorgue, setHasMorgue] = useState(false);
  const [googleMapsLink, setGoogleMapsLink] = useState(''); // New state for Google Maps link

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHospital = {
      id: Date.now(),
      hospitalName,
      phoneNumber,
      location,
      services,
      hospitalType, // Include hospital type in the new hospital object
      bedsAvailable: Number(bedsAvailable),
      totalDoctors: Number(totalDoctors),
      totalNurses: Number(totalNurses),
      totalEmergencyUnits: Number(totalEmergencyUnits),
      image,
      morgue: hasMorgue,
      googleMapsLink, // Include Google Maps link
    };
    onAddHospital(newHospital);
    // Reset form fields
    setHospitalName('');
    setPhoneNumber('');
    setLocation('');
    setServices('inpatient');
    setHospitalType('government'); // Reset hospital type
    setBedsAvailable('');
    setTotalDoctors('');
    setTotalNurses('');
    setTotalEmergencyUnits('');
    setImage('');
    setHasMorgue(false);
    setGoogleMapsLink(''); // Reset Google Maps link
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-700">Add New Hospital</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Hospital Name</label>
        <input
          type="text"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
          className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
          placeholder="Enter hospital name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
          placeholder="Enter phone number"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
          placeholder="Enter location"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Services</label>
        <select
          value={services}
          onChange={(e) => setServices(e.target.value)}
          className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
        >
          <option value="specialists">Specialists</option>
          <option value="cardiology">Cardiology</option>
          <option value="outpatient">Outpatient</option>
          <option value="inpatient">Inpatient</option>
          <option value="cathetization">Cathetization</option>
          <option value="allied health services">Allied Health Services</option>
          <option value="theatre">Theatre</option>
          <option value="radiology">Radiology</option>
          <option value="laboratory">Laboratory</option>
          <option value="gastroscopy">Gastroscopy</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Hospital Type</label>
        <select
          value={hospitalType}
          onChange={(e) => setHospitalType(e.target.value)}
          className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
        >
          <option value="government">Government Hospital</option>
          <option value="missionary">Missionary Hospital</option>
          <option value="private">Private Hospital</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Beds Available</label>
          <input
            type="number"
            value={bedsAvailable}
            onChange={(e) => setBedsAvailable(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
            placeholder="Enter beds available"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Total Doctors</label>
          <input
            type="number"
            value={totalDoctors}
            onChange={(e) => setTotalDoctors(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
            placeholder="Enter total doctors"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Total Nurses</label>
          <input
            type="number"
            value={totalNurses}
            onChange={(e) => setTotalNurses(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
            placeholder="Enter total nurses"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Total Emergency Units</label>
          <input
            type="number"
            value={totalEmergencyUnits}
            onChange={(e) => setTotalEmergencyUnits(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
            placeholder="Enter total emergency units"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
          placeholder="Enter image URL"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Google Maps Link</label>
        <input
          type="text"
          value={googleMapsLink}
          onChange={(e) => setGoogleMapsLink(e.target.value)}
          className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
          placeholder="Enter Google Maps link"
        />
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={hasMorgue}
            onChange={(e) => setHasMorgue(e.target.checked)}
            className="mr-2 text-green-500 focus:ring-green-500 focus:border-green-500"
          />
          <span className="text-sm font-medium text-gray-700">Has Morgue</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-700 transition duration-300"
      >
        Add Hospital
      </button>
    </form>
  );
};

export default HospitalForm;
