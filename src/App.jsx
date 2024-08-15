// 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import AdminLanding from './components/Admin/AdminLanding';
import Home from './pages/Home';
import Hospitals from './pages/Hospitals';
import Ambulances from './pages/Ambulances';
import HospitalDetail from './pages/HospitalDetail';
import Admin from './pages/Admin';
import AdminLogin from './components/Admin/AdminLogin';
import AdminSignUp from './components/Admin/AdminSignup';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

// New imports
import AdminDashboard from './components/Admin/AdminDashboard';
import Overview from './components/Admin/Overview';
import HospitalForm from './components/Admin/HospitalForm';
import AmbulanceForm from './components/Admin/AmbulanceForm';
import AdminAnalytics from './components/Admin/AdminAnalytics';
import AdminSettings from './components/Admin/AdminSettings';

// Define the handleAmbulanceSubmit function
function handleAmbulanceSubmit(formData) {
  console.log("Ambulance Form Submitted", formData);
  // Here you can add logic to send the form data to your backend or perform other actions.
}
function App() {
  
  return (
    <Router>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLanding />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignUp />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="hospital-form" element={<HospitalForm />} />
          <Route path="ambulance-form" element={<AmbulanceForm onSubmit={handleAmbulanceSubmit} />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* User routes wrapped in Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospitals/:id" element={<HospitalDetail />} />
          <Route path="/ambulances" element={<Ambulances />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
