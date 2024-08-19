// 
import { useState } from 'react';
import { UserPenIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect} from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Loader from "../Loader"; // Adjust the path as needed
import { apiCheckUsernameExists, apiSignUp } from '../../services/auth';
import { debounce } from 'lodash';

const AdminSignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [UserNameAvailable, setUserNameAvailable] = useState(false);
    const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
    const [isUsernameLoading, setIsUsernameLoading] = useState(false)

    const checkUserName = async (userName) => {
        setIsUsernameLoading(true)
        try {
            const res = await apiCheckUsernameExists(userName);
            // console.log(res.data);
            const user = res.data.user
            if (user) {
                setUsernameNotAvailable(true);
                setUserNameAvailable(false)
            } else {
                setUserNameAvailable(true);
                setUsernameNotAvailable(false)
            }
        } catch (error) {
            // console.log(error);
            toast.error("An error occured!");

        } finally {
            setIsUsernameLoading(false)
        }
    };

    const userNameWatch = watch("username");

    useEffect(() => {
        const debouncedSearch = debounce(async () => {
            if (userNameWatch) {
                await checkUserName(userNameWatch)
            }
        }, 1000)

        debouncedSearch()

        return () => {
            debouncedSearch.cancel();
        }

    }, [userNameWatch]);


    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        let payload = {
            firstName: data.firstName,
            lastName: data.lastName,
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
            const res = await apiSignUp(payload);
            console.log(res.data);
            toast.success(res.data)
            setTimeout(() => {
                navigate("/admin/login")
            }, 3000);

        } catch (error) {
            console.log(error);
            toast.error("An error occured!");
        }
        finally {
            setIsSubmitting(false);

        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
            >
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Admin Sign Up
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Create your admin account below
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="firstName" className="sr-only">First Name</label>
                            <input
                                id="firstName"
                                {...register("firstName", { required: "First name is required" })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="sr-only">Last Name</label>
                            <input
                                id="lastName"
                                {...register("lastName", { required: "Last name is required" })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Last Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                {...register("username", { required: "Username is required" })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                            />
                        </div>
                        <div className="flex items-center">
                            {isUsernameLoading && <Loader />}
                            {
                                UserNameAvailable && <p className="text-green-500">Username is available!</p>
                            }
                            {
                                usernameNotAvailable && <p className="text-red-500">Username is already taken!</p>
                            }
                        </div>
                        <div>
                            <label htmlFor="emailAddress" className="sr-only">Email Address</label>
                            <input
                                id="emailAddress"
                                type="email"
                                {...register("emailAddress", { required: "Email Address is required" })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email Address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                type="password"
                                {...register("password", { required: "Password is required" })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    {Object.keys(errors).length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-500 text-sm"
                        >
                            {Object.values(errors).map((error, index) => (
                                <p key={index}>{error.message}</p>
                            ))}
                        </motion.div>
                    )}

                    <div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? <Loader /> : (
                                <>
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <UserPenIcon className="h-5 w-5 text-cyan-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Sign Up
                                </>
                            )}
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminSignUp;