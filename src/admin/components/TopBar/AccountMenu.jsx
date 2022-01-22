import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaPowerOff, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 w-52 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-3">
        <div className="px-1 py-1">
          <h2 className="px-2 text-lg tracking-wider text-gray-900 lg:hidden font-bold">
            Mr. John Doe
          </h2>
        </div>
        <MenuItem icon={FaUserCircle} to="/admin/my-account" text="My Account" />
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-500 text-white" : "text-gray-900"
                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
              >
                <FaPowerOff
                  className={`w-5 h-5 mr-2 ${
                    active ? "text-white" : "text-gray-500"
                  }`}
                  aria-hidden="true"
                />
                Log out
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  );
}

const MenuItem = ({ text, to, icon: Icon }) => (
  <div className="px-1 py-1">
    <Menu.Item>
      {({ active }) => (
        <Link
        to={to}
          className={`${
            active ? "bg-gray-500 text-white" : "text-gray-900"
          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
        >
          {Icon && (
            <Icon
              className={`w-5 h-5 mr-2 ${
                active ? "text-white" : "text-gray-500"
              }`}
              aria-hidden="true"
            />
          )}
          {text}
        </Link>
      )}
    </Menu.Item>
  </div>
);
