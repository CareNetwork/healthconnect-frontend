// 
import { useState } from 'react';
import { FaSearch, FaAmbulance, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const GetStarted = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    { icon: FaSearch, title: "Search Hospitals", description: "Find hospitals by location, specialty, or name." },
    { icon: FaAmbulance, title: "Find Ambulances", description: "Locate nearby ambulance services quickly." },
    { icon: FaPhoneAlt, title: "Emergency Call", description: "Use our emergency button for immediate assistance." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-cyan-900 to-cyan-700">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-cyan-100"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          How to Get Started
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-cyan-800 rounded-xl shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                backgroundColor: "#0e7490" // darker cyan for hover
              }}
              onHoverStart={() => setHoveredItem(index)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <motion.div
                animate={{
                  y: hoveredItem === index ? -10 : 0,
                  color: hoveredItem === index ? "#22d3ee" : "#67e8f9", // brighter cyan on hover
                  rotate: hoveredItem === index ? 360 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="text-6xl mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-cyan-100">{item.title}</h3>
              <p className="text-cyan-200">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;