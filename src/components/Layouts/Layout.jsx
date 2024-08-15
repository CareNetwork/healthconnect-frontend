import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className={`text-2xl font-bold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Health Connect
          </Link>
          <nav className="hidden md:flex space-x-6">
            {["Home", "Hospitals", "Ambulances"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`text-sm font-medium ${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-500 transition duration-300`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Link
            to="/login"
            className={`px-4 py-2 rounded-full ${
              scrolled ? "bg-blue-500 text-white" : "bg-white text-blue-500"
            } hover:bg-opacity-90 transition duration-300`}
          >
            Login Portal
          </Link>
          <button onClick={toggleMenu} className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg"
          >
            {["Home", "Hospitals", "Ambulances", "Login"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        {/* <Hero /> Place the Hero component here */}
        <div className="container mx-auto px-4 py-8">
          <ScrollAnimationWrapper>
          <Outlet /> {/* This is where the child routes will render */}
          </ScrollAnimationWrapper>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Health Connect</h3>
              <p className="text-gray-400">
                Connecting you to quality healthcare services.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Hospitals", "Ambulances", "Login"].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">Email: info@healthconnect.com</p>
              <p className="text-gray-400">Phone: +233 123 456 789</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Health Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
