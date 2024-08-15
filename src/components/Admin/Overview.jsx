// Overview.js
import { FaHospital, FaAmbulance, FaUsers } from 'react-icons/fa';

const Overview = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded shadow-md flex items-center">
          <FaHospital className="text-blue-500 text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Hospitals</h3>
            <p className="text-3xl font-bold">24</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded shadow-md flex items-center">
          <FaAmbulance className="text-red-500 text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Ambulance Services</h3>
            <p className="text-3xl font-bold">10</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded shadow-md flex items-center">
          <FaUsers className="text-green-500 text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Users</h3>
            <p className="text-3xl font-bold">150</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
