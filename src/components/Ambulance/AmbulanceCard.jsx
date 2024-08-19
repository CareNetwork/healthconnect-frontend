/* eslint-disable react/prop-types */
const AmbulanceCard = ({ ambulance }) => {
  return (
    <div className="bg-cyan-100 shadow-md rounded-lg overflow-hidden p-6 mb-4 hover:shadow-lg transition duration-300">
       <img 
src={ambulance.image}
        alt={`Image of ${ambulance.ambulancename}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2 text-cyan-800">{ambulance.name}</h3>
        {/* <p className="text-cyan-600 mb-2">{ambulance.location}</p> */}
        <p className="text-gray-600 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {ambulance.location}
        </p>
        <p className=" text-cyan-500 mb-4">{ambulance.phone}</p>
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