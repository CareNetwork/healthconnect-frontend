import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Health Connect</Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link>
            <Link to="/hospitals" className="hover:text-blue-200 transition duration-300">Hospitals</Link>
            <Link to="/ambulances" className="hover:text-blue-200 transition duration-300">Ambulances</Link>
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <Link to="/" className="block py-2 px-4 hover:bg-blue-700">Home</Link>
            <Link to="/hospitals" className="block py-2 px-4 hover:bg-blue-700">Hospitals</Link>
            <Link to="/ambulances" className="block py-2 px-4 hover:bg-blue-700">Ambulances</Link>
          </motion.div>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Health Connect</h3>
              <p>Connecting you to quality healthcare services.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul>
                <li><Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link></li>
                <li><Link to="/hospitals" className="hover:text-blue-300 transition duration-300">Hospitals</Link></li>
                <li><Link to="/ambulances" className="hover:text-blue-300 transition duration-300">Ambulances</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <p>Email: info@healthconnect.com</p>
              <p>Phone: +233 123 456 789</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Health Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;