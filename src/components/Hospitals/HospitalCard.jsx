/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={hospital.image} alt={hospital.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
        <p className="text-gray-600 mb-2">{hospital.location}</p>
        <p className="text-sm text-gray-500 mb-4">{hospital.specialties.join(', ')}</p>
        <Link 
          to={`/hospitals/${hospital.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HospitalCard;