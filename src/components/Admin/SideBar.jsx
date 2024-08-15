// Sidebar.js
import { Link } from 'react-router-dom';
import { FaHospital, FaAmbulance, FaChartLine, FaCogs, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full p-4 bg-black text-white">
      <Link to="/admin/overview" className="flex items-center mb-4 p-2 text-lg hover:bg-gray-800 rounded">
        <FaHome className="mr-3" /> Overview
      </Link>
      <Link to="/admin/hospital-form" className="flex items-center mb-4 p-2 text-lg hover:bg-gray-800 rounded">
        <FaHospital className="mr-3" /> +Hospital
      </Link>
      <Link to="/admin/ambulance-form" className="flex items-center mb-4 p-2 text-lg hover:bg-gray-800 rounded">
        <FaAmbulance className="mr-3" /> +Ambulance
      </Link>
      <Link to="/admin/analytics" className="flex items-center mb-4 p-2 text-lg hover:bg-gray-800 rounded">
        <FaChartLine className="mr-3" /> Analytics
      </Link>
      <Link to="/admin/settings" className="flex items-center mb-4 p-2 text-lg hover:bg-gray-800 rounded">
        <FaCogs className="mr-3" /> Settings
      </Link>
    </div>
  );
};

export default Sidebar;
