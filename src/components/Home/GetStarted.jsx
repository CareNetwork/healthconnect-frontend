import { FaSearch, FaAmbulance, FaPhoneAlt } from 'react-icons/fa';

const GetStarted = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">How to Get Started</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaSearch className="text-5xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Search Hospitals</h3>
            <p>Find hospitals by location, specialty, or name.</p>
          </div>
          <div className="text-center">
            <FaAmbulance className="text-5xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Find Ambulances</h3>
            <p>Locate nearby ambulance services quickly.</p>
          </div>
          <div className="text-center">
            <FaPhoneAlt className="text-5xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Emergency Call</h3>
            <p>Use our emergency button for immediate assistance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;