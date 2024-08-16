
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  { id: 1, name: 'Kwame A.', content: 'Health Connect Ghana helped me find the right specialist quickly. Great service!' },
  { id: 2, name: 'Ama B.', content: 'The emergency feature is a lifesaver. I got an ambulance in minutes when I needed it most.' },
  // Add more reviews
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000); // Adjust the timing as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cyan-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">What Our Users Say</h2>
        <div className="relative">
          <AnimatePresence>
            <motion.div
              key={reviews[currentReview].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="bg-navy-800 p-8 rounded-lg shadow-lg">
                <p className="text-lg mb-4 text-cyan-100">{reviews[currentReview].content}</p>
                <p className="font-semibold text-cyan-500">- {reviews[currentReview].name}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
