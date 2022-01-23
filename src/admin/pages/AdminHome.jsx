import React from "react";
// import { HiUserGroup, HiOutlineCalendar } from "react-icons/hi";
import CountCards from "../components/AdminHomeComponents/CountCards";
import Piechart from "../components/charts/Pie";

const AdminHome = () => {
  return (
    <div className="">
      <CountCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 my-12 gap-5">
        <div className="w-full h-[320px] rounded-md bg-white shadow-md">
          <h3 className="text-2xl text-center p-3">Scc Members Chart</h3>

          <div className="flex items-center justify-center space-x-4">
            <h2 className="flex items-center font-light text-sm">
              <div className="w-4 h-4 bg-[#0088FE] mr-1"></div>ST ANGELUS
            </h2>
            <h2 className="flex items-center font-light text-sm">
              <div className="w-4 h-4 bg-[#00C49F] mr-1"></div>ST JOSEPH
            </h2>
            <h2 className="flex items-center font-light text-sm">
              <div className="w-4 h-4 bg-[#FF8042] mr-1"></div>ST PETERS
            </h2>
          </div>
          <div className="w-50 h-60">
            <Piechart />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <h3 className="text-2xl text-center p-3">Admin Users</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
