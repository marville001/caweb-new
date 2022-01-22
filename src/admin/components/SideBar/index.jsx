import React from "react";
import {
  HiUserGroup,
  HiServer,
  HiCalendar,
  HiChartSquareBar,
  HiCog,
} from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed inset-y-0 left-0 bg-white w-56">
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
        <SideLink to="/admin" text="Manage" icon={HiUserGroup} />
        <SideLink to="/admin/nnn" text="Boards" icon={HiServer} />
        <SideLink to="/" text="Report" icon={HiChartSquareBar} />
        <SideLink to="/" text="Schedule" icon={HiCalendar} />
        <Link
          to="/admin/setting"
          className="absolute flex justify-center items-center flex-col
                py-7 text-slate-100 bottom-16 inset-x-0"
        >
          <HiCog className="w-7 h-7" />
          Settings
        </Link>
      </div>
    </div>
  );
};

const SideLink = ({ text, to, icon: Icon }) => (
  <NavLink
    to={to}
    className={(isActive) =>
      `flex py-3 items-center text-gray-500 px-4 ${isActive && "bg-slate-600"}`
    }
  >
    <Icon className="w-6 h-6 mr-4" />
    <span className="text-[15px]">{text}</span>
  </NavLink>
);

export default SideBar;
