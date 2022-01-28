import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import adminLogin from "../../redux/actions/admin/adminLogin";

const AdminLogin = () => {
  const { admin, loading, error } = useSelector((state) => state.adminState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(adminLogin({ email, password }));
  };
  
  useEffect(() => {
    if (admin._id) {
      navigate("/admin");
    }
  }, [admin, navigate]);

  return (
    <div className="flex bg-slate-100 absolute inset-0 items-center justify-center ">
      <div className="bg-white p-10 w-full md:w-auto shadow-xl  md:min-w-[400px]">
        <h1 className="text-center text-lg uppercase font-bold">Admin Login</h1>
        <div className="py-6">
          {error && (
            <p className="bg-red-100 p-2 rounded text-center text-red-600">
              {error}
            </p>
          )}
          <div className="form-group my-4">
            <label htmlFor="username" className="text-lg text-slate-600">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              placeholder="Enter your email..."
            />
          </div>
          <div className="form-group my-4">
            <label htmlFor="password" className="text-lg text-slate-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              placeholder="Enter your password..."
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full p-2 mt-5 text-white text-center text-lg uppercase bg-dodge-blue rounded cursor-pointer disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
          >
            {loading && <FaSpinner className="mr-2 animate-spin" />}
            Login
          </button>

          <p className="py-3 text-xs text-center">Contact me@gmail.com if you forgot password</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
