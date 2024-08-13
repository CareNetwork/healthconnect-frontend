/* eslint-disable react/prop-types */

import { UserPenIcon } from "lucide-react";
import { signUp } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
// import { apiCheckUsernameExists, apiSignUp } from "../../services/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { debounce } from "lodash";


const Signup = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [UserNameAvailable, setUserNameAvailable] = useState(false);
    const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
    const [isUsernameLoading, setIsUsernameLoading] = useState(false)

    const checkUserName = async (userName) => {
        setIsUsernameLoading(true)
        try {
            const res = await apiCheckUsernameExists(userName);
            console.log(res.data);
            const user = res.data.user
            if (user) {
                setUsernameNotAvailable(true);
                setUserNameAvailable(false)
            } else {
                setUserNameAvailable(true);
                setUsernameNotAvailable(false)
            }
        } catch (error) {
            console.log(error);
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
        setIsSubmitting(true)
        let payload = {
            firstName: data.firstName,
            lastName: data.surname,
            userName: data.username,
            password: data.password,
            email: data.emailAddress,
            confirmedPassword: data.password,
        };
        if (data.otherNames) {
            payload = { ...payload, otherNames: data.otherNames };
        }
        try {
            const res = await apiSignUp(payload);
            console.log(res.data);
            toast.success(res.data)
            setTimeout(() => {
                navigate("/signin")
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
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden"
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

                <div className="w-full md:w-1/2 p-8 bg-gray-100">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl font-bold text-gray-800 mb-2 text-center"
                    >
                        Let&apos;s get started!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-gray-600 mb-6 text-center"
                    >
                        Enter the fields below to join our community
                    </motion.p>

                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <InputField
                            label="First Name"
                            id="firstName"
                            register={register}
                            errors={errors}
                            placeholder="Enter first name"
                        />
                        <InputField
                            label="Surname"
                            id="surname"
                            register={register}
                            errors={errors}
                            placeholder="Enter surname"
                        />
                        <InputField
                            label="Other Names"
                            id="otherNames"
                            register={register}
                            errors={errors}
                            placeholder="Enter other name"
                            isRequired={false}
                        />
                        <InputField
                            label="Email address"
                            id="emailAddress"
                            register={register}
                            errors={errors}
                            placeholder="Enter email"
                        />
                        <InputField
                            label="Username"
                            id="username"
                            register={register}
                            errors={errors}
                            placeholder="Enter username"
                        />
                        <div className="flex items-center">
                            {isUsernameLoading && <Loader />}
                            {
                                UserNameAvailable && <p className="text-green-500">Username is available!</p>
                            }
                            {
                                usernameNotAvailable && <p className="text-red-500">Username is already taken!</p>
                            }
                        </div>
                        <InputField
                            label="Password"
                            id="password"
                            register={register}
                            errors={errors}
                            placeholder="Enter password"
                            type="password"
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-gray-700 to-black text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition duration-300 flex items-center justify-center"
                        >
                            <span>
                                {isSubmitting ? <Loader />
                                    : "Sign Up"}</span>
                            <UserPenIcon className="ml-2 h-5 w-5" />
                        </motion.button>
                    </motion.form>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="mt-6 text-sm text-gray-600 text-center"
                    >
                        Already have an account?{' '}
                        <a onClick={() => navigate("/Signin")} className="text-gray-800 hover:text-gray-600 cursor-pointer hover:underline transition duration-300">
                            Sign In
                        </a>
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

const InputField = ({ label, id, register, errors, placeholder, type = "text", isRequired = true }) => (
    <div className="group">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            id={id}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform group-hover:scale-[1.02] bg-white"
            placeholder={placeholder}
            {...register(id, isRequired && { required: `${label} is required` })}
        />
        {errors[id] && <p className="mt-1 text-sm text-red-600">{errors[id].message}</p>}
    </div>
);

export default Signup;