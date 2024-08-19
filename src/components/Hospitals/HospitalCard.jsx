import PropTypes from "prop-types";


const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
     <img 
src={hospital.image}
        alt={`Image of ${hospital.hospitalname}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-cyan-200">{hospital.hospitalname}</h3>
        {/* <p className="text-gray-600 mb-2 flex items-center">{hospital.location}</p> */}
        <p className="text-gray-600 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {hospital.location}
        </p>
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
            className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            View on Google Maps
          </a>
        )}
          {hospital.websiteLink && (
           <a 
            href={hospital.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${hospital.hospitalname} website`}
            className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-md hover:bg-cyan-200 transition-colors duration-300 text-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View More
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
    websiteLink: PropTypes.string,
  }).isRequired,
};

export default HospitalCard;
