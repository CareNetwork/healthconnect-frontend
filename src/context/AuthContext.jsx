// /* eslint-disable react/prop-types */
// import { createContext, useState, useEffect } from 'react';
// // import { loginAdmin, logoutAdmin, getCurrentAdmin } from '../services/auth'; // Adjust these function names to match service implementation

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [admin, setAdmin] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const login = async (credentials) => {
//     try {
//       const loggedInAdmin = await(credentials);
//       setAdmin(loggedInAdmin);
//     } catch (err) {
//       console.error('Admin login failed', err);
//     }
//   };

//   const logout = () => {
//     logoutAdmin();
//     setAdmin(null);
//   };

//   useEffect(() => {
//     const fetchAdmin = async () => {
//       try {
//         const currentAdmin = await getCurrentAdmin();
//         setAdmin(currentAdmin);
//       } catch (err) {
//         console.error('Failed to fetch current admin', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAdmin();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ admin, login, logout, loading }}>
//       {!loading && children} {/* Render children only after loading is done */}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;