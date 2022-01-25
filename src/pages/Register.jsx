import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../redux/actions/userActions";
import { FaSpinner } from "react-icons/fa";

const Register = () => {
  const { user, registerLoading, registerError } = useSelector(
    (state) => state.accountUsers
  );

  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    scc: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    // console.log({inputs});
    dispatch(userSignUp(inputs));
  };

  useEffect(() => {
    if (user._id) {
      navigate("/my-account");
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center items-center min-h-[70vh] my-6">
      <div className="shadow-md p-5 bg-white  w-full md:w-auto mx-2 sm:mx-10  sm:min-w-[400px] md:min-w-[600px]">
        <h1 className="text-center font-bold text-3xl text-dodge-blue">
          Create An Account
        </h1>
        <div className="py-6">
          {registerError && (
            <p className="bg-red-100 p-2 rounded text-center text-red-600">
              {registerError}
            </p>
          )}
          <div className="md:flex md:gap-2">
            <div className="form-group my-4 flex-1">
              <label htmlFor="firstname" className="text-lg text-slate-600">
                Firstname
              </label>
              <input
                value={inputs.firstname}
                onChange={handleInputChange}
                name="firstname"
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
                value={inputs.lastname}
                onChange={handleInputChange}
                name="lastname"
                type="text"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your lastname..."
              />
            </div>
          </div>
          <div className="md:flex md:gap-2">
            <div className="form-group my-4 flex-1">
              <label htmlFor="username" className="text-lg text-slate-600">
                Username
              </label>
              <input
                value={inputs.username}
                onChange={handleInputChange}
                name="username"
                type="text"
                id="username"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your username..."
              />
            </div>
            <div className="form-group my-4 flex-1">
              <label htmlFor="scc" className="text-lg text-slate-600">
                SCC Group
              </label>
              <select
                value={inputs.scc}
                onChange={handleInputChange}
                name="scc"
                id="scc"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              >
                <option value="">Select your scc</option>
                <option value="stpeters">St Peters</option>
                <option value="stangelus">St Angelus</option>
                <option value="stjoseph">St Joseph</option>
              </select>
            </div>
          </div>
          <div className="md:flex md:gap-2">
            <div className="form-group my-4 flex-1">
              <label htmlFor="email" className="text-lg text-slate-600">
                Email
              </label>
              <input
                value={inputs.email}
                onChange={handleInputChange}
                name="email"
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
                value={inputs.password}
                onChange={handleInputChange}
                name="password"
                id="password"
                type="password"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your password..."
              />
            </div>
          </div>

          <button
            onClick={handleRegister}
            disabled={registerLoading}
            className="w-full p-2 mt-5 text-white text-center text-lg uppercase bg-dodge-blue rounded cursor-pointer disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
          >
            {registerLoading && <FaSpinner className="mr-2 animate-spin" />}
            register
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
