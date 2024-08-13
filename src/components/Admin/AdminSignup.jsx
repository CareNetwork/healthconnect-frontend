import { useState } from 'react';
import { UserPenIcon } from "lucide-react";
// import { signUp } from '../../assets/images';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
// import { apiSignUp } from '../../services/api'; // Adjust the path as needed
import Loader from '../Loader'; // Adjust the path as needed

const AdminSignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        let payload = {
            firstName: data.firstName,
            lastName: data.surname,
            userName: data.username,
            password: data.password,
            email: data.emailAddress,
            confirmedPassword: data.password,
            role: 'admin'
        };
        if (data.otherNames) {
            payload = { ...payload, otherNames: data.otherNames };
        }
        try {
            const res = await (payload);
            console.log(res.data);
            toast.success(res.data);
            setTimeout(() => {
                navigate("/admin/signin");
            }, 3000);
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "An error occurred!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden"
            >
                {/* Image section remains unchanged */}
                <div className="w-full md:w-1/2 p-8 bg-gray-100">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl font-bold text-gray-800 mb-2 text-center"
                    >
                        Admin Sign Up
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-gray-600 mb-6 text-center"
                    >
                        Create your admin account below
                    </motion.p>

                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <div>
                            <label htmlFor="firstName" className="block mb-1">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                {...register("firstName", { required: "First name is required" })}
                                className="w-full p-2 border rounded"
                                placeholder="Enter first name"
                            />
                            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-1">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                {...register("lasstName", { required: "last name is required" })}
                                className="w-full p-2 border rounded"
                                placeholder="Enter last name"
                            />
                            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="userName" className="block mb-1">Username</label>
                            <input
                                type="text"
                                id="username"
                                {...register("username", { required: "username is required" })}
                                className="w-full p-2 border rounded"
                                placeholder="Enter username"
                            />
                            {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="emailAddress" className="block mb-1">Email Address</label>
                            <input
                                type="text"
                                id="emailAddress"
                                {...register("emailAddress", { required: "Email Address is required" })}
                                className="w-full p-2 border rounded"
                                placeholder="Enter first name"
                            />
                            {errors.emailAddress && <span className="text-red-500">{errors.emailAddress.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-1">Password</label>
                            <input
                                type="text"
                                id="password"
                                {...register("password", { required: "Password is required" })}
                                className="w-full p-2 border rounded"
                                placeholder="Enter password"
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        
                        {/* Add similar input fields for surname, otherNames, username, emailAddress, and password */}
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-gray-700 to-black text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition duration-300 flex items-center justify-center"
                        >
                            <span>{isSubmitting ? <Loader /> : "Sign Up"}</span>
                            <UserPenIcon className="ml-2 h-5 w-5" />
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminSignUp;