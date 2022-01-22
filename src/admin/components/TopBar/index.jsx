import React from "react";
import { HiSearch, HiAtSymbol, HiBell } from "react-icons/hi";

const TopBar = () => {
  return (
    <div
      className="h-16 pl-56 fixed bg-gradient-to-r from-purple-400
        to-blue-500 w-full flex items-center justify-between pr-5"
    >
      <div className="flex px-5 items-center">
        <HiSearch className="w-5 h-5 text-white" />
        <input
          type="text"
          placeholder="Search for tasks ..."
          className=" bg-transparent border-0 text-white placeholder-gray-200
                outline-none focus:ring-0 text-lg"
        />
      </div>
      <div className="flex space-x-6">
        <HiAtSymbol className="w-7 h-7 text-white" />
        <HiBell className="w-7 h-7 text-white" />
        <div className="flex items-center text-white">
          <h3 className="font-bold mr-3">M. John Doe</h3>
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            width="36"
            height="36"
            objectFit="cover"
            className=" rounded-full "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
