import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="flex bg-slate-100 absolute inset-0 items-center justify-center ">
      <div className="bg-white p-10 w-full md:w-auto shadow-xl  md:min-w-[400px]">
        <h1 className="text-center text-lg uppercase font-bold">Admin Login</h1>
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

          <Link to="/admin" className="block w-full px-10 p-2 mt-5 text-white text-center text-lg uppercase bg-dodge-blue rounded cursor-pointer">
            Continue
          </Link>

          <p className="py-3">Contact me@gmail.com if you forgot password</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
