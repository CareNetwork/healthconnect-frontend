// 
import { UserPlusIcon } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { useState } from "react";
import { toast } from "react-toastify";
import { apiLogin } from '../../services/auth';
import { signUp } from '../../assets/images';
import Loader from "../Loader";

// 
const AdminLogin = () => {
   
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiLogin({
        userName: data.username,
        password: data.password,
      });
      // console.log("Full Response:", res.data);

      if (res && res.data){
      localStorage.setItem("accessToken", res.data.accessToken);
      
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 3000);

     } else {
        throw new Error("No data found in the response");
      }
    
    } catch (error) {
      console.log(error);
      toast.error("An error occured!");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden"
      >
        <motion.div
          className="w-full md:w-1/2 hidden md:block relative overflow-hidden"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.img
            className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-500"
            src={signUp}
            alt="Signup"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <div className="w-full md:w-1/2 p-8 bg-cyan-50">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-cyan-800 mb-2"
          >
            Welcome back! 🚀
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-cyan-600 mb-6"
          >
            Enter your details to join our amazing community
          </motion.p>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="group">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-cyan-700 mb-1"
              >
                Username/Email
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border border-cyan-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out transform group-hover:scale-[1.02] bg-white"
                placeholder="johndoe@example.com"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-cyan-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-cyan-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out transform group-hover:scale-[1.02] bg-white"
                placeholder="••••••••"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-800 text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition duration-300 flex items-center justify-center"
            >
              <span> {isSubmitting ? <Loader /> : "Sign In"}</span>
              <UserPlusIcon className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 text-sm text-cyan-600 text-center"
          >
            Don&apos;t have an account?{" "}
            <a
              onClick={() => navigate("/Signup")}
              className="text-cyan-800 hover:text-cyan-600 cursor-pointer hover:underline transition duration-300"
            >
              Sign Up
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;