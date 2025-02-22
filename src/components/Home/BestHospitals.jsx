import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { korlebu,kathWard,hoth,tamale,capeCoast } from '../../assets/images';

const mockHospitals = [
  { id: 1, name: 'Korle-Bu Teaching Hospital', image: korlebu },
  { id: 2, name: 'Komfo Anokye Teaching Hospital', image: kathWard },
  { id: 3, name: 'Tamale Teaching Hospital', image: tamale },
  { id: 4, name: 'Cape Coast Teaching Hospital', image: capeCoast },
  { id: 5, name: 'Ho Teaching Hospital', image: hoth },
];

const BestHospitals = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: [-2000, 0],
        transition: { duration: 40, ease: "linear" }
      });
      controls.set({ x: 0 });
      animateCarousel();
    };

    animateCarousel();
  }, [controls]);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Hospitals in Ghana</h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={controls}
          >
            {[...mockHospitals, ...mockHospitals, ...mockHospitals].map((hospital, index) => (
              <div key={`${hospital.id}-${index}`} className="flex-shrink-0 w-64 mx-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={hospital.image} alt={hospital.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{hospital.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BestHospitals;