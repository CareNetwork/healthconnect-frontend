// 
import { useState } from 'react';
import Layout from '../../components/Layouts/Layout';
import AdminDashboard from '../../components/Admin/AdminDashboard';
import AdminLogin from '../../components/Admin/AdminLogin';
import AdminSignUp from '../../components/Admin/AdminSignup';  // Import the AdminSignup component

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Assume initially not authenticated
  const [isSigningUp, setIsSigningUp] = useState(false);  // Track if the user is signing up

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleToggleSignUp = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <Layout>
      <h1>Admin</h1>
      {isAuthenticated ? (
        <AdminDashboard />
      ) : isSigningUp ? (
        <AdminSignUp />
      ) : (
        <AdminLogin onLoginSuccess={handleLoginSuccess} onToggleSignUp={handleToggleSignUp} />
      )}
    </Layout>
  );
};

export default Admin;
