import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] my-6">
      <div className="shadow-md p-5 bg-white w-full md:min-w-[400px] md:min-w-[600px]">
        <h1 className="text-center font-bold text-3xl text-dodge-blue">
          Create An Account
        </h1>
        <div className="py-6">
          <div className="md:flex md:gap-2">
            <div className="form-group my-4 flex-1">
              <label htmlFor="firstname" className="text-lg text-slate-600">
                Firstname
              </label>
              <input
                type="text"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your firstname..."
              />
            </div>
            <div className="form-group my-4 flex-1">
              <label htmlFor="lastname" className="text-lg text-slate-600">
                Lastname
              </label>
              <input
                type="text"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your lastname..."
              />
            </div>
          </div>
          <div className="md:flex md:gap-2">
            <div className="form-group my-4 flex-1">
              <label htmlFor="email" className="text-lg text-slate-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your email..."
              />
            </div>
            <div className="form-group my-4 flex-1">
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
          </div>

          <button className="w-full p-2 mt-5 text-white text-center text-lg uppercase bg-dodge-blue rounded cursor-pointer">
            Register
          </button>
          <div className="flex justify-between mt-4">
            <Link
              className="text-md font-medium text-slate-700 underline"
              to="/login"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
