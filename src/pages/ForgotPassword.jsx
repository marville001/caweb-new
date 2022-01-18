import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="shadow-md p-5 bg-white md:min-w-[400px]">
        <h1 className="text-center font-bold text-3xl text-dodge-blue">
          Forgot Password
        </h1>
        <div className="py-6">
          <div className="form-group my-4">
            <p className="my-2">Enter email your email to receive a password reset link</p>
            <input
              type="text"
              className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              placeholder="Enter your email..."
            />
          </div>

          <button className="w-full p-2 mt-5 text-white text-center text-lg uppercase bg-dodge-blue rounded cursor-pointer">
            Request Reset Link
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
