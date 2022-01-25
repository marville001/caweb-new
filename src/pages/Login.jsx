import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/actions/userActions";
import { FaSpinner } from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { user, loginLoading, loginError } = useSelector(
    (state) => state.accountUsers
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(userLogin({ email, password }));
  };

  useEffect(() => {
    if (user._id) {
      navigate("/my-account");
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="shadow-md p-5 bg-white w-full mx-2 sm:mx-10 md:w-auto md:min-w-[400px]">
        <h1 className="text-center font-bold text-3xl text-dodge-blue">
          Welcome, Login
        </h1>

        <div></div>
        <div className="py-6">
          {loginError && (
            <p className="bg-red-100 p-2 rounded text-center text-red-600">
              {loginError}
            </p>
          )}
          <div className="form-group my-4">
            <label htmlFor="email" className="text-lg text-slate-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              placeholder="Enter your username..."
            />
          </div>
          <div className="form-group my-4">
            <label htmlFor="password" className="text-lg text-slate-600">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              placeholder="Enter your password..."
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loginLoading}
            className="w-full p-2 mt-5 text-white text-center text-lg uppercase bg-dodge-blue rounded cursor-pointer disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
          >
            {loginLoading && <FaSpinner className="mr-2 animate-spin" />}
            Login
          </button>
          <div className="flex justify-between mt-4">
            <Link
              className="text-sm md:text-md font-medium text-slate-700 underline"
              to="/register"
            >
              Register here
            </Link>
            <Link
              className="text-sm md:text-md font-medium text-slate-700 underline"
              to="/forgot-password"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
