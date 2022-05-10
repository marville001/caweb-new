import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import { put } from "../redux/actions/http";
import { useForm } from "react-hook-form";
import parseError from "../utils/parseError";
import { FaSpinner } from "react-icons/fa";

const ResetPassword = () => {
    const [state, setState] = useState({
        error: "",
        loading: false,
        success: "",
    });

    const { token } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const handleReset = async (details) => {
        setState({ error: "", loading: true, success: "" });

        if (details.password !== details.cpassword) {
            setState({ error: "Passwords do not match" });
            return;
        }

        try {
            const data = await put(`auth/resetPassword/${token}`, {
                password: details.password,
            });
          
            setState({ loading: false, success: data.message });

            reset();
        } catch (error) {
            setState({ error: parseError(error), loading: false });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh]">
            <form
                onSubmit={handleSubmit(handleReset)}
                className="shadow-md p-5 bg-white w-full md:w-auto mx-2 sm:mx-10  md:min-w-[400px]"
            >
                <h1 className="text-center font-bold text-3xl text-dodge-blue">
                    Reset Password
                </h1>
                {state.error && (
                    <div className="bg-red-300 p-2 text-center my-4 rounded text-sm text-red-800">
                        {state.error}
                    </div>
                )}
                {state.success && (
                    <div className="bg-green-200 text-sm my-4 p-2 rounded-lg text-center text-green-500">
                        {state.success}!
                    </div>
                )}
                <div className="py">
                    <div className="form-group my-4">
                        <label
                            htmlFor="password"
                            className="text-lg text-slate-600"
                        >
                            New Password
                        </label>
                        <input
                            type="password"
                            className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                            placeholder="*****************"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: `Password is required`,
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="form-group my-4">
                        <label
                            htmlFor="password"
                            className="text-lg text-slate-600"
                        >
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                            placeholder="*****************"
                            {...register("cpassword", {
                                required: {
                                    value: true,
                                    message: `Confirm Password is required`,
                                },
                            })}
                        />
                        {errors.cpassword && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.cpassword.message}
                            </p>
                        )}
                    </div>

                    <button
                        disabled={state.loading}
                        type="submit"
                        className="disabled:bg-slate-700 flex justify-center items-center disabled:cursor-not-allowed w-full p-2 mt-4 text-white text-center text-lg uppercase bg-dodge-blue rounded cursor-pointer"
                    >
                        {!state.loading ? "Submit" : (
                            <>
                            <FaSpinner className="mr-2 animate-spin" /> Loading...
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
