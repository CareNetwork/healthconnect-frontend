import { useState } from 'react';
import AdminDashboard from '../../components/Admin/AdminDashboard';
import AdminLogin from '../../components/Admin/AdminLogin';
import AdminSignUp from '../../components/Admin/AdminSignup';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleToggleSignUp = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <>
      <h1>Admin</h1>
      {isAuthenticated ? (
        <AdminDashboard />
      ) : isSigningUp ? (
        <AdminSignUp />
      ) : (
        <AdminLogin onLoginSuccess={handleLoginSuccess} onToggleSignUp={handleToggleSignUp} />
      )}
    </>
  );
};

export default Admin;