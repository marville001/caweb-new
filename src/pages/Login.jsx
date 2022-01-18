import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="shadow-md p-5 bg-white md:min-w-[400px]">
        <h1 className="text-center font-bold text-3xl text-dodge-blue">
          Welcome, Login
        </h1>
        <div className="py-6">
          <div className="form-group my-4">
            <label htmlFor="username" className="text-lg text-slate-600">
              Username
            </label>
            <input
              type="text"
              className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              placeholder="Enter your username..."
            />
          </div>
          <div className="form-group my-4">
            <label htmlFor="password" className="text-lg text-slate-600">
              Password
            </label>
            <input
            id="password"
              type="password"
              className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              placeholder="Enter your password..."
            />
          </div>

          <button className="w-full p-2 mt-5 text-white text-center text-lg uppercase bg-dodge-blue rounded cursor-pointer">Login</button>
          <div className="flex justify-between mt-4">
              <Link className="text-md font-medium text-slate-700 underline" to="/register">Register here</Link>
              <Link className="text-md font-medium text-slate-700 underline" to="/forgot-password">Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
