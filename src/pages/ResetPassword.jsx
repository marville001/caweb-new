import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="shadow-md p-5 bg-white min-w-[400px]">
        <h1 className="text-center font-bold text-3xl text-dodge-blue">
          Reset Password
        </h1>
        <div className="py-6">
          <div className="form-group my-4">
            <label htmlFor="password" className="text-lg text-slate-600">
              New Password
            </label>
            <input
              type="password"
              className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              placeholder="*****************"
            />
          </div>
          <div className="form-group my-4">
            <label htmlFor="password" className="text-lg text-slate-600">
              Confirm New Password
            </label>
            <input
              type="password"
              className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              placeholder="*****************"
            />
          </div>

          <button className="w-full p-2 mt-5 text-white text-center text-lg uppercase bg-dodge-blue rounded cursor-pointer">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
