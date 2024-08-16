import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
import { heroBg } from '../../assets/images';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Health Connect Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl md:text-6xl font-bold mb-4"
        >
          Health Connect Ghana
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-xl md:text-2xl mb-8"
        >
          Find the best hospitals and ambulance services near you
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white text-lg mb-4"
        >
          Is it an emergency?
        </motion.p>
        <motion.a
          href="tel:+233193"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 text-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-red-600 transition duration-200 shadow-lg"
        >
          <FaPhoneAlt />
          <span>Call Ghana Ambulance Service</span>
        </motion.a>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ left: '58%', marginLeft: '-150px' }} // Adjust this value as needed
      >
        <span className="mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown size={24} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;