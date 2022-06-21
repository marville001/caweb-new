import React from "react";
import {
    HiUserGroup,
    HiCalendar,
    HiBookOpen,
    HiOutlineFolder,
} from "react-icons/hi";
import { FaPowerOff, FaUncharted, FaUserFriends, FaUserTie, FaInfoCircle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT_ADMIN } from "../../../redux/types";

const SideBar = ({ open, setSideBarOpen }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutAdmin = () => {
        localStorage.removeItem("adminToken");
        dispatch({ type: LOGOUT_ADMIN });
        navigate("/admin/login");
    };

    const closeSidebar = () => {
        if (document.body.clientWidth < 1240) {
            setSideBarOpen(false);
        }
    }

    return (
        <div
            className={`${
                !open && "-translate-x-full"
            } fixed inset-y-0 left-0 bg-white w-64 transition-all z-[100]
            duration-300 ease-linear`}
        >
            <div className="flex bg-slate-900 flex-col text-lg h-full relative  min-h-[600px] overflow-y-auto">
                <h2
                    className="flex items-center justify-center text-2xl
            h-16 text-white font-bold my-4"
                >
                    DASHBOARD
                </h2>

                <div className="w-full h-[2px] bg-white opacity-30" />

                <div className="links my-6 flex flex-col space-y-4 px-4">
                    <SideLink to="/admin/home" text="Home" icon={FaUncharted} closeSidebar={closeSidebar} />
                    <SideLink
                        to="/admin/users"
                        text="Users"
                        icon={HiUserGroup}
                        closeSidebar={closeSidebar}
                    />
                    <SideLink
                        to="/admin/prayers"
                        text="Prayers"
                        icon={HiBookOpen}
                        closeSidebar={closeSidebar}
                    />
                    <SideLink
                        to="/admin/sccs"
                        text="Scc Groups"
                        closeSidebar={closeSidebar}
                        icon={FaUserFriends}
                    />
                    <SideLink
                        to="/admin/leaders"
                        text="Leadership"
                        icon={FaUserTie}
                        closeSidebar={closeSidebar}
                    />
                    <SideLink
                        to="/admin/events"
                        text="Events"
                        icon={HiCalendar}
                        closeSidebar={closeSidebar}
                    />
                    <SideLink
                        to="/admin/gallery"
                        text="Our Gallery"
                        icon={HiOutlineFolder}
                        closeSidebar={closeSidebar}
                    />

                    <SideLink
                        to="/admin/about-dekut"
                        text="About Dekut"
                        icon={FaInfoCircle}
                        closeSidebar={closeSidebar}
                    />

                </div>
                <div className="inset-x-0 bottom-6 flex px-8">
                    <button
                        onClick={logoutAdmin}
                        className="flex items-center flex-row
          py-7 text-slate-300 gap-4"
                    >
                        <FaPowerOff className="w-6 h-6 mr-2" />

                        <span className="text-[15px]">Log Out</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const SideLink = ({ text, to, icon: Icon, closeSidebar=()=>{} }) => {
    const { pathname } = useLocation();
    return (
        <NavLink
            to={to}
            onClick={closeSidebar}
            className={`py-2 px-3 rounded-md  w-full flex items-center space-x-4 ${
                pathname === to || pathname.startsWith(to) 
                    ? "bg-white text-slate-900"
                    : "text-white opacity-70 hover:bg-slate-700 "
            } `}
        >
            <Icon className="w-6 h-6 mr-2" />
            <span className="text-[18px] tracking-wide">{text}</span>
        </NavLink>
    );
};

export default SideBar;
