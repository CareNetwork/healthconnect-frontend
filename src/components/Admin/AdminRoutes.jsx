
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AmbulanceForm from './AmbulanceForm';
import HospitalForm from './HospitalForm';
import AdminSettings from './AdminSettings';
import Overview from './Overview';
import AdminAnalytics from './AdminAnalytics';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="settings" element={<AdminSettings />} />
      <Route path="ambulance-form" element={<AmbulanceForm onSubmit={handleAmbulanceSubmit} />} />
      <Route path="hospital-form" element={<HospitalForm onSubmit={handleHospitalSubmit} />} />
      <Route path="analytics" element={<AdminAnalytics />} />
      <Route path="overview" element={<Overview />} />
    </Routes>
  );
};

// Example submit handlers (implement these according to your needs)
const handleAmbulanceSubmit = (formData) => {
  // Handle ambulance form submission
  console.log('Ambulance form submitted:', formData);
};

const handleHospitalSubmit = (formData) => {
  // Handle hospital form submission
  console.log('Hospital form submitted:', formData);
};

export default AdminRoutes;
