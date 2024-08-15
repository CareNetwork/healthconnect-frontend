import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { vidBg1, vidBg2, vidBg3, vidBg4 } from '../../assets/images';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Array of video sources
  const videos = [vidBg1, vidBg2, vidBg3, vidBg4];

  // Function to handle video end
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="relative h-screen">
      <video
        className="w-full h-full object-cover"
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        onEnded={handleVideoEnd}
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-4">Health Connect Ghana</h1>
        <p className="text-white text-xl mb-8">Find the best hospitals and ambulance services near you</p>
        <p className="text-white text-lg mb-4">Is it an emergency?</p>
        <a
          href="tel:+233193"
          className="bg-red-500 text-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-red-600 transition duration-200"
        >
          <FaPhoneAlt />
          <span>Call Ghana Ambulance Service</span>
        </a>
        <motion.div
          className="absolute bottom-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Scroll to explore
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
