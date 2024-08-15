import { Link } from 'react-router-dom';
import { landingBg } from '../../assets/images';

const AdminLanding = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={landingBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="mb-4 text-5xl font-bold">Welcome to Admin Dashboard</h1>
        <p className="mb-8 text-xl">Access your administrative tools here</p>
        <div className="space-x-4">
          <Link to="/admin/login" className="px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 border-2 border-white rounded hover:bg-white hover:text-black">
            Sign In
          </Link>
          <Link to="/admin/signup" className="px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 border-2 border-white rounded hover:bg-white hover:text-black">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLanding;
