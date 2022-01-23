import { useState } from "react";
import Modal from "../components/common/Modal";

import UsersTable from "../components/UsersPageComponents/UsersTable";

const UsersPage = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <div className="align-middle inline-block min-w-full mt-6">
        <div className="p-4 flex justify-between">
          <h4 className=" text-2xl font-bold">Users List</h4>
          <button
            onClick={openModal}
            className="p-2 bg-sea-green py-1 px-4 text-white uppercase font-normal rounded-md"
          >
            Add User
          </button>
        </div>
        <UsersTable />
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-top transition-all transform bg-white shadow-xl rounded-2xl">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Add User
          </h3>
          <div className="mt-2">
            <div className="md:flex md:gap-2">
              <div className="form-group my-2 flex-1">
                <label htmlFor="firstname" className="text-lg text-slate-600">
                  Firstname
                </label>
                <input
                  type="text"
                  className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                  placeholder="Enter your firstname..."
                />
              </div>
              <div className="form-group my-2 flex-1">
                <label htmlFor="lastname" className="text-lg text-slate-600">
                  Lastname
                </label>
                <input
                  type="text"
                  className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                  placeholder="Enter your lastname..."
                />
              </div>
            </div>
            <div className="md:flex md:gap-2">
              <div className="form-group my-2 flex-1">
                <label htmlFor="email" className="text-lg text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                  placeholder="Enter your email..."
                />
              </div>
              <div className="form-group my-2 flex-1">
                <label htmlFor="password" className="text-lg text-slate-600">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                  placeholder="Enter your password..."
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="block w-full bg-dodge-blue px-4 py-2 text-sm font-medium text-white rounded-md"
              onClick={closeModal}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UsersPage;
