import PropTypes from "prop-types";

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
     <img 
src={hospital.image}
        alt={`Image of ${hospital.hospitalname}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{hospital.hospitalname}</h3>
        <p className="text-gray-600 mb-2">{hospital.location}</p>
        <p className="text-sm text-gray-500 mb-4">
          {hospital.services
            ? hospital.services.join(", ")
            : "No services available"}
        </p>

        {/* New Google Maps link with accessibility and target attributes */}
        {hospital.googleMapsLink && (
          <a
            href={hospital.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${hospital.hospitalname} on Google Maps`}
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
    hospitalname: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.string),
    googleMapsLink: PropTypes.string,
  }).isRequired,
};

export default HospitalCard;
