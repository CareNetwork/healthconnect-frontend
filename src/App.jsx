
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import Home from './pages/Home';
import Hospitals from './pages/Hospitals';
import Ambulances from './pages/Ambulances';
import HospitalDetail from './pages/HospitalDetail';
import Admin from './pages/Admin';
import AdminLogin from './components/Admin/AdminLogin';
import AdminSignUp from './components/Admin/AdminSignup';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospitals/:id" element={<HospitalDetail />} />
          <Route path="/ambulances" element={<Ambulances />} />
          <Route path="/admin/signup" element={<AdminSignUp />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
          <Route 
            path="/admin/dashboard" 
            element={
              // <ProtectedRoute>
                <Admin />
              // </ProtectedRoute>
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;