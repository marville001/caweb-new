import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";

const MyAccount = () => {
  const { user } = useSelector((state) => state.accountUsers);

  const [profileImage, setProfileImage] = useState("");

  const navigate = useNavigate();

  const sccs = {
    stangelus: "St Angelus",
    stpeters: "St Peters",
    stjoseph: "St Joseph",
  };

  const imageRef = useRef();

  useEffect(() => {
    if (!user._id) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="max-w-4xl mx-auto bg-white my-16 p-6 pb-28">
      <h2 className="text-3xl text-dodge-blue font-bold">Manage Account</h2>
      <hr className="my-4" />
      <div className="flex flex-col lg:flex-row lg:divide-x-2">
        <div className="px-5 py-4 pb-10 min-w-[200px]">
          <ul className="flex flex-wrap flex-row lg:flex-col items-center md:space-x-2 lg:space-x-0 lg:space-y-3  gap-4 lg:gap-0">
            <li>
              <Link
                to="/my-account"
                className="text-lg tracking-wider font-light"
              >
                Account Details
              </Link>
            </li>
            <li>
              <Link
                to="/my-account"
                className="text-lg tracking-wider font-light"
              >
                My Subscription
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-5  flex-1">
          {/* Profile Image */}
          <div className="flex flex-col sm:flex-row relative gap-6">
            <div className="w-32 h-32 cursor-pointer">
              <img
                className="rounded-md w-full h-full object-contain"
                src={`${process.env.REACT_APP_UPLOADS_URL+ user?.avatar}`}
                alt="Avatar"
              />
            </div>
            <div className="flex flex-col items-start my-2">
              <input
                onChange={(e) => setProfileImage(e.target.files)}
                ref={imageRef}
                id="profile-image"
                className="hidden"
                value={profileImage}
                type="file"
              />
              <div
                onClick={() => imageRef.current.click()}
                className="min-w-[250px] cursor-pointer border p-2 pr-10 rounded-lg"
              >
                {profileImage?.length >= 1
                  ? profileImage[0].name
                  : "Select Image"}
              </div>
              <button className="bg-sea-green px-4 py-1 my-2 rounded-lg text-white uppercase block">
                Update
              </button>
            </div>
          </div>

          <hr className="mt-8" />

          {/* Other Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className=" w-full">
              <p className="text-md mb-2 font-light">Firstname</p>
              <input
                type="text"
                value={user.firstname}
                onChange={()=>{}}
                className="p-2 text-slate-700 rounded-md outline-none border w-full"
              />
            </div>
            <div className="w-full">
              <p className="text-md mb-2 font-light">Lastname</p>
              <input
                type="text"
                onChange={()=>{}}
                value={user.lastname}
                className="p-2 text-slate-700 rounded-md outline-none border w-full"
              />
            </div>
            <div className=" w-full">
              <p className="text-md mb-2 font-light">Username</p>
              <input
                type="text"
                value={user.username}
                onChange={()=>{}}
                className="p-2 text-slate-700 rounded-md outline-none border w-full"
              />
            </div>
            <div className=" w-full">
              <p className="text-md mb-2 font-light">Email</p>
              <input
                type="text"
                readOnly
                value={user.email}
                onChange={()=>{}}
                className="read-only:bg-gray-200 p-2 rounded-md outline-none border w-full  text-slate-700"
              />
            </div>
            <div className=" w-full">
              <p className="text-md mb-2 font-light">SCC Group</p>
              <input
                type="text"
                readOnly
                value={sccs[user.scc]}
               
                className="read-only:bg-gray-200 p-2 rounded-md outline-none border w-full text-slate-700"
              />
            </div>
          </div>

          <button className="bg-sea-green px-10 py-1 my-2 rounded-md text-white uppercase block">
            Update
          </button>

          <hr className="my-8" />
          <h5 className="text-slate-500 text-lg">Update password</h5>
          <input
            type="password"
            placeholder="Enter old password"
            className="p-2 mt-4 rounded-md outline-none border text-slate-700"
          />
          <input
            type="password"
            placeholder="Enter new password"
            className="p-2 my-4 rounded-md outline-none border sm:mx-4 text-slate-700"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            className="p-2 rounded-md outline-none border  text-slate-700"
          />

          <button className="bg-sea-green px-10 py-2 my-6 rounded-md text-white uppercase block">
            Change Pasword
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
