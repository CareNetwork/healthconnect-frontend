
const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/assets/images/about-health-connect.jpg" alt="About Health Connect Ghana" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Health Connect Ghana</h2>
            <p className="mb-4">
              Health Connect Ghana is dedicated to improving access to healthcare services across the country. Our platform connects patients with hospitals and ambulance services, making it easier for everyone to receive the care they need.
            </p>
            <p>
              With a comprehensive database of healthcare providers and emergency services, we&apos;re committed to enhancing the healthcare experience for all Ghanaians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;