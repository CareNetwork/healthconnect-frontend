import { nurse } from "../../assets/images";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-navy-900 to-navy-700 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 relative">
            <img 
              src={nurse} 
              alt="Connecting hands in starry sky" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-50 rounded-lg"></div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-cyan-700">Connecting Health, Saving Lives</h2>
            <p className="mb-4 text-lg text-black">
              Health Connect Ghana is dedicated to improving access to healthcare services across the country. Our platform connects patients with hospitals and ambulance services, making it easier for everyone to receive the care they need.
            </p>
            <p className="text-lg text-black">
              With a comprehensive database of healthcare providers and emergency services, we&apos;re committed to enhancing the healthcare experience for all Ghanaians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
