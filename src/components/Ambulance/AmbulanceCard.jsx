/* eslint-disable react/prop-types */
const AmbulanceCard = ({ ambulance }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{ambulance.name}</h3>
        <p className="text-gray-600 mb-2">{ambulance.location}</p>
        <p className="text-sm text-gray-500 mb-4">{ambulance.phone}</p>
        <button 
          onClick={() => window.location.href = `tel:${ambulance.phone}`}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Call Now
        </button>
      </div>
    </div>
  );
};

export default AmbulanceCard;