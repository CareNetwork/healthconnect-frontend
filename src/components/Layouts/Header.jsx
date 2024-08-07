import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">HealthConnect</Link>
        <nav className="flex items-center">
          <Link to="/about" className="mx-2">About</Link>
          <Link to="/hospitals" className="mx-2">Hospitals</Link>
          <Link to="/ambulance-services" className="mx-2">Ambulance Services</Link>
          <Link to="/contact" className="mx-2">Contact Us</Link>
          <Link to="/signup" className="mx-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Sign Up</Link>
          <Link to="/login" className="mx-2 bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition duration-300">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
