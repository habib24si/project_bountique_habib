import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Login() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
        name: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        axios
            .post("https://dummyjson.com/auth/login", {
                username: dataForm.email,
                password: dataForm.password,
            })
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.data.message);
                    return;
                }

                navigate("/");
            })
            .catch((err) => {
                if (err.response) {
                    setError(err.response.data.message || "An error occurred");
                } else {
                    setError(err.message || "An unknown error occurred");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-[#f3f3f3] p-9">

            {/* Title */}
            <h1 className="text-gray-400 text-2xl mb-4">
                Sign in
            </h1>

            {/* Main Box */}
            <div className="bg-white rounded-3xl overflow-hidden flex min-h-[700px]">

                {/* Left Side */}
                <div className="w-1/2 flex items-center justify-center px-20">

                    <div className="w-full max-w-sm">

                        <h2 className="text-3xl font-semibold text-black mb-10">
                            Get Started Now
                        </h2>

                        {/* Error */}
                        {error && (
                            <div className="bg-red-100 text-red-600 p-3 rounded-xl mb-5 text-sm flex items-center">
                                <BsFillExclamationDiamondFill className="mr-2" />
                                {error}
                            </div>
                        )}

                        {/* Loading */}
                        {loading && (
                            <div className="bg-gray-100 p-3 rounded-xl mb-5 text-sm flex items-center">
                                <ImSpinner2 className="mr-2 animate-spin" />
                                Mohon Tunggu...
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>

                            

                            {/* Name */}
                            <div className="mb-4">
                                <label className="text-sm text-gray-500 block mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="email"
                                    value={dataForm.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label className="text-sm text-gray-500 block mb-2">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    value={dataForm.password}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                                />
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-center gap-2 mb-6">
                                <input type="checkbox" />

                                <p className="text-sm text-gray-500">
                                    I agree to the terms & policy
                                </p>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#3f6b2a] hover:bg-[#345922] text-white py-3 rounded-lg font-medium transition"
                            >
                                {loading ? "Loading..." : "Signup"}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-8">
                            <div className="flex-1 h-[1px] bg-gray-200"></div>

                            <span className="text-gray-400 text-sm">
                                Or
                            </span>

                            <div className="flex-1 h-[1px] bg-gray-200"></div>
                        </div>

                        {/* Social Button */}
                        <div className="flex gap-4">

                            <button className="flex-1 border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50">
                                <FcGoogle />
                                <span className="text-sm">
                                    Sign in with google
                                </span>
                            </button>

                            <button className="flex-1 border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50">
                                <FaApple />
                                <span className="text-sm">
                                    Sign in with Apple
                                </span>
                            </button>
                        </div>

                        {/* Bottom */}
                        <p className="text-center text-gray-500 text-sm mt-8">
                            Have an account?{" "}
                            <span className="text-blue-600 cursor-pointer">
                                Sign in
                            </span>
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-1/2 bg-[#f4f1ec] relative overflow-hidden">

                    <img
                        src="public/img/bountique.jpg"
                        alt="Leaf"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}