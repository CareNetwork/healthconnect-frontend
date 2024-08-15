import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSave, FaSignOutAlt, FaBell, FaMoon } from 'react-icons/fa';

const AdminSettings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    notificationsEnabled: true,
    emergencyAlertThreshold: 5,
    dataRefreshInterval: 5,
    darkMode: false,
    language: 'en',
    maxAmbulancesPerHospital: 10,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
    // Implement API call to save settings
  };

  const handleLogout = () => {
    navigate('/admin/login');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 text-gray-700">
            <FaBell className="text-xl" />
            <span>Enable Notifications</span>
          </label>
          <input
            type="checkbox"
            name="notificationsEnabled"
            checked={settings.notificationsEnabled}
            onChange={handleChange}
            className="transform scale-125 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Emergency Alert Threshold:
            <input
              type="number"
              name="emergencyAlertThreshold"
              value={settings.emergencyAlertThreshold}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Data Refresh Interval (minutes):
            <input
              type="number"
              name="dataRefreshInterval"
              value={settings.dataRefreshInterval}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 text-gray-700">
            <FaMoon className="text-xl" />
            <span>Dark Mode</span>
          </label>
          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleChange}
            className="transform scale-125 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Language:
            <select
              name="language"
              value={settings.language}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Max Ambulances Per Hospital:
            <input
              type="number"
              name="maxAmbulancesPerHospital"
              value={settings.maxAmbulancesPerHospital}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-400"
        >
          <FaSave className="mr-2" />
          Save Settings
        </button>
      </form>

      <div className="mt-10">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-400"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
