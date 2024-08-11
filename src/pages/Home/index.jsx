
import Hero from '../../components/Home/Hero';
import BestHospitals from '../../components/Home/BestHospitals';
import GetStarted from '../../components/Home/GetStarted';
import About from '../../components/Home/About';
import Reviews from '../../components/Home/Reviews';
import FAQ from '../../components/Home/FAQ';
import HealthBlogs from '../../components/Home/HealthBlogs';

const Home = () => {
  return (
    <div>
      <Hero />
      <BestHospitals />
      <GetStarted />
      <About />
      <Reviews />
      <FAQ />
      <HealthBlogs />
    </div>
  );
};

export default Home;