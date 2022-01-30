import React from "react";
import {
  HiTemplate,
  HiUserGroup,
  HiCalendar,
  HiBookOpen,
  HiOutlineFolder,
} from "react-icons/hi";
import { FaPowerOff, FaUserTie } from "react-icons/fa";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT_ADMIN } from "../../../redux/types.admin";

const SideBar = ({ open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAdmin = ()=>{
    localStorage.removeItem("adminToken")
    dispatch({ type: LOGOUT_ADMIN });
    navigate("/admin/login")
  }

  return (
    <div
      className={`${
        !open && "-translate-x-full"
      } fixed inset-y-0 left-0 bg-white w-64`}
    >
      <h1
        className="flex items-center justify-center text-2xl
            h-16 bg-slate-800 text-dodge-blue font-bold"
      >
        DEKUT CC
      </h1>
      <div className="flex bg-slate-700 flex-col text-lg h-full relative">
        <h2
          className="flex items-center justify-center text-2xl
            h-16 text-white font-bold"
        >
          DASHBOARD
        </h2>
        <SideLink to="/admin" text="Home" icon={HiTemplate} />
        <SideLink to="/admin/users" text="Users" icon={HiUserGroup} />
        <SideLink to="/admin/prayers" text="Prayers" icon={HiBookOpen} />
        <SideLink to="/admin/leaders" text="Leadership" icon={FaUserTie} />
        <SideLink to="/admin/events" text="Events" icon={HiCalendar} />
        <SideLink
          to="/admin/gallery"
          text="Our Gallery"
          icon={HiOutlineFolder}
        />
        <div className="absolute inset-x-0 bottom-16 flex justify-center">
          <button
            onClick={logoutAdmin}
            className="flex justify-center items-center flex-col
          py-7 text-slate-300"
          >
            <FaPowerOff className="w-6 h-6 mb-2" />

            <span className="text-[15px]">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const SideLink = ({ text, to, icon: Icon }) => {
  const { pathname } = useLocation();
  return (
    <NavLink
      to={to}
      className={`flex py-3 items-center px-4 ${
        pathname === to
          ? "bg-slate-600 border-r-4 border-r-slate-50 text-slate-100"
          : "text-gray-400"
      }`}
    >
      <Icon className="w-6 h-6 mr-4" />
      <span className="text-[15px] tracking-wide">{text}</span>
    </NavLink>
  );
};

export default SideBar;
