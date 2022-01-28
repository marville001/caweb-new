import React from "react";
import { HiSearch,  HiBell, HiMenuAlt1 } from "react-icons/hi";
import { Menu} from "@headlessui/react";
import AccountMenu from "./AccountMenu";
import { useSelector } from "react-redux";

const TopBar = ({ sideBarOpen, setSideBarOpen }) => {
  const { admin } = useSelector((state) => state.adminState);
  return (
    <div
      className={`${
        sideBarOpen && "pl-64"
      } h-16 fixed bg-white shadow-md w-full flex items-center justify-between pr-5`}
    >
      <div className="flex items-center">
        <div
          className="cursor-pointer m-2"
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          <HiMenuAlt1 className="w-8 h-8 text-slate-800" />
        </div>
        <div className="flex ml-2 items-center">
          <HiSearch className="w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search here ..."
            className=" bg-transparent border-0 p-2 text-slate-500 placeholder-gray-300
                outline-none focus:ring-0 text-lg"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <HiBell className="w-7 h-7 text-slate-500" />
        <div className="flex items-center text-slate-500">
          <h3 className="font-bold mr-3 hidden lg:block">{admin._id? admin.firstname + " " + admin.lastname: "M. John Doe"}</h3>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-white">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  width="36"
                  height="36"
                  objectFit="cover"
                  className=" rounded-full "
                  alt=""
                />
              </Menu.Button>
            </div>
            <AccountMenu />
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
