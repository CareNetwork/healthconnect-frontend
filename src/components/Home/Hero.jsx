import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa'; // Import the telephone icon

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Health Connect Ghana</h1>
        <p className="text-xl mb-8">Find the best hospitals and ambulance services near you</p>
        <div className="flex space-x-4 items-center">
          <Link to="/hospitals" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Find Hospitals
          </Link>
          <Link to="/ambulances" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition duration-300">
            Find Ambulances
          </Link>
          <div className="flex items-center space-x-2">
            <a
              href="tel:193"
              className="bg-red-500 text-white p-3 rounded-full animate-fade hover:bg-red-600 transition duration-300"
            >
              <FaPhoneAlt />
            </a>
            <span className="text-sm font-semibold">Emergency? Tap to Call</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
