import { useState } from 'react';
import PropTypes from 'prop-types';

const AmbulanceForm = ({ onSubmit, initialData = {}, hospitals = [] }) => {
  const [formData, setFormData] = useState({
    serviceProvider: initialData.serviceProvider || '',
    serviceProviderContactNumber: initialData.serviceProviderContactNumber || '',
    vehicleNumber: initialData.vehicleNumber || '',
    driverName: initialData.driverName || '',
    driverContactNumber: initialData.driverContactNumber || '',
    address: initialData.address || '',
    status: initialData.status || 'Available',
    assignedHospital: initialData.assignedHospital || '',
    image: initialData.image || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Ambulance Details</h2>
      
      <div className="mb-4">
        <label htmlFor="serviceProvider" className="block text-sm font-medium text-gray-700">Service Provider</label>
        <input
          type="text"
          id="serviceProvider"
          name="serviceProvider"
          value={formData.serviceProvider}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="serviceProviderContactNumber" className="block text-sm font-medium text-gray-700">Service Provider Contact Number</label>
        <input
          type="tel"
          id="serviceProviderContactNumber"
          name="serviceProviderContactNumber"
          value={formData.serviceProviderContactNumber}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="vehicleNumber" className="block text-sm font-medium text-gray-700">Vehicle Number</label>
        <input
          type="text"
          id="vehicleNumber"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="driverName" className="block text-sm font-medium text-gray-700">Driver Name</label>
        <input
          type="text"
          id="driverName"
          name="driverName"
          value={formData.driverName}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="driverContactNumber" className="block text-sm font-medium text-gray-700">Driver Contact Number</label>
        <input
          type="tel"
          id="driverContactNumber"
          name="driverContactNumber"
          value={formData.driverContactNumber}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Available">Available</option>
          <option value="On Call">On Call</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="assignedHospital" className="block text-sm font-medium text-gray-700">Assigned Hospital</label>
        <select
          id="assignedHospital"
          name="assignedHospital"
          value={formData.assignedHospital}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select a hospital</option>
          {hospitals.map((hospital) => (
            <option key={hospital._id} value={hospital._id}>
              {hospital.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};

AmbulanceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    serviceProvider: PropTypes.string,
    serviceProviderContactNumber: PropTypes.string,
    vehicleNumber: PropTypes.string,
    driverName: PropTypes.string,
    driverContactNumber: PropTypes.string,
    address: PropTypes.string,
    status: PropTypes.string,
    assignedHospital: PropTypes.string,
    image: PropTypes.string,
  }),
  hospitals: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

export default AmbulanceForm;
