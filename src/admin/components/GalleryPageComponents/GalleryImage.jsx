import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { HiOutlineDotsHorizontal, HiPencil, HiTrash } from "react-icons/hi";
const GalleryImage = ({ image }) => {
  return (
    <div className="min-w-[220px] flex-1 bg-white rounded p-2">
      <img
        className="w-full h-44"
        src={`https://randomuser.me/api/portraits/men/${image}.jpg`}
        alt=""
      />
      <h3 className="mt-3 font-medium text-dodge-blue">
        St Peters Hike Mau Caves
      </h3>
      <div className="flex justify-between my-1 items-center">
        <p>{new Date().toDateString()}</p>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button>
            <HiOutlineDotsHorizontal className="text-4xl font-bold cursor-pointer text-slate-500" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-24 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg drop-shadow-sm focus:outline-none py-2 px-2">
              <Menu.Item>
                {({ active }) => (
                  <button className={"flex items-center space-x-2"}>
                    <HiPencil className={"text-gray-500"} aria-hidden="true" />
                    <span>Edit</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className={"flex items-center space-x-2"}>
                    <HiTrash className={"text-gray-500 my-1"} aria-hidden="true" />
                    <span>Delete</span>
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default GalleryImage;
