//
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  FaChartBar,
  FaHospital,
  FaAmbulance,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import AdminAnalytics from "./AdminAnalytics"; // Adjust the path as needed

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { path: "/admin/dashboard/overview", icon: FaChartBar, label: "Overview" },
    {
      path: "/admin/dashboard/hospital-form",
      icon: FaHospital,
      label: "Add Hospital",
    },
    {
      path: "/admin/dashboard/ambulance-form",
      icon: FaAmbulance,
      label: "Add Ambulance",
    },
    {
      path: "/admin/dashboard/analytics",
      icon: FaChartBar,
      label: "Analytics",
    }, // Analytics tab
    { path: "/admin/dashboard/settings", icon: FaCog, label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-cyan-600 to-indigo-800 text-white transition-all duration-300 ease-in-out shadow-lg`}
      >
        <div className="p-4 flex items-center justify-between">
          <h2 className={`text-2xl font-bold ${isSidebarOpen ? "" : "hidden"}`}>
            Admin Panel
          </h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 bg--700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isSidebarOpen ? "<<" : ">>"}
          </button>
        </div>
        <nav className="mt-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center py-3 px-4 rounded-lg ${
                location.pathname === item.path
                  ? "bg-indigo-700 shadow-lg"
                  : "hover:bg-indigo-600 hover:shadow-md"
              } transition-colors duration-200`}
            >
              <item.icon
                className={`text-xl ${isSidebarOpen ? "mr-4" : "mx-auto"}`}
              />
              <span className={isSidebarOpen ? "" : "hidden"}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <button className="flex items-center justify-center py-2 px-3 bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400">
            <FaSignOutAlt className="text-xl mr-2" />
            <span className={`${isSidebarOpen ? "inline-block" : "hidden"}`}>
              Logout
            </span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white shadow-inner">
        <header className="bg-white shadow-md p-6 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-cyan-800">
            Welcome, Admin!
          </h1>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
