// import { Link } from 'react-router-dom';

// const HospitalCard = ({ hospital }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <img src={hospital.image} alt={hospital.name} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
//         <p className="text-gray-600 mb-2">{hospital.location}</p>
//         <p className="text-sm text-gray-500 mb-4">
//           {hospital.specialties ? hospital.specialties.join(', ') : 'No specialties available'}
//         </p>
//         {/* New Google Maps link */}
//         {hospital.googleMapsLink && (
//           <a
//             href={hospital.googleMapsLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block text-blue-500 underline mb-4"
//           >
//             View on Google Maps
//           </a>
//         )}
//         <Link
//           to={`/hospitals/${hospital.id}`}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HospitalCard;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={hospital.image}
        alt={`Image of ${hospital.name}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
        <p className="text-gray-600 mb-2">{hospital.location}</p>
        <p className="text-sm text-gray-500 mb-4">
          {hospital.specialties
            ? hospital.specialties.join(", ")
            : "No specialties available"}
        </p>

        {/* New Google Maps link with accessibility and target attributes */}
        {hospital.googleMapsLink && (
          <a
            href={hospital.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${hospital.name} on Google Maps`}
          >
            View on Google Maps
          </a>
        )}
      </div>
    </div>
  );
};

HospitalCard.propTypes = {
  hospital: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    specialties: PropTypes.arrayOf(PropTypes.string),
    googleMapsLink: PropTypes.string,
  }).isRequired,
};

export default HospitalCard;
