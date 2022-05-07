import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { post } from "../redux/actions/http";
import parseError from "../utils/parseError";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleEmailSubmit = async () => {
        setError("");
        setSuccess("");
        const obj = { email };

        if (!email) {
            return;
        }

        setLoading(true);
        setError("");

        try {
            const data = await post("auth/forgotPassword", obj);
            setLoading(false);
            setSuccess(data.message);
            setError("");
            setEmail("");
            setTimeout(() => {
                setSuccess("");
            }, 10000);
        } catch (error) {
            setError(parseError(error));
            setLoading(false);

            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh]">
            <div className="shadow-md p-5 bg-white w-full md:w-auto mx-4 sm:mx-10  md:min-w-[400px]">
                <h1 className="text-center font-bold text-3xl text-dodge-blue">
                    Forgot Password
                </h1>
                {error && (
                    <div className="bg-red-200 text-sm my-4 p-2 rounded-lg text-center text-red-500">
                        {error}!
                    </div>
                )}
                {success && (
                    <div className="bg-green-200 text-sm my-4 p-2 rounded-lg text-center text-green-500">
                        {success}!
                    </div>
                )}
                <div className="py-6">
                    <div className="form-group my-4">
                        <p className="my-2">
                            Enter email your email to receive a password reset
                            link
                        </p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                            placeholder="Enter your email..."
                        />
                    </div>

                    <button
                        disabled={loading}
                        onClick={handleEmailSubmit}
                        className="disabled:bg-slate-700 flex justify-center items-center disabled:cursor-not-allowed w-full p-2 mt-4 text-white text-center text-lg uppercase bg-dodge-blue rounded cursor-pointer"
                    >
                        {!loading ? "Submit" : (
                            <>
                            <FaSpinner className="mr-2 animate-spin" /> Loading...
                            </>
                        )}
                    </button>
                    <div className="flex justify-between mt-4">
                        <Link
                            className="text-md font-medium text-slate-700 underline"
                            to="/login"
                        >
                            Got To Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
