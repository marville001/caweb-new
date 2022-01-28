import { useState } from "react";
import AddUserModal from "../components/UsersPageComponents/AddUserModal";

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
        <div className="bg-white rounded-t-md">
          <div className="p-4 flex justify-between ">
            <h4 className=" text-2xl font-bold">Users List</h4>
            <button
              onClick={openModal}
              className="p-2 bg-sea-green py-1 px-4 text-white uppercase font-normal rounded-md"
            >
              Add User
            </button>
          </div>
          <div className="px-4 pb-2">
            <input
              type="text"
              className="p-3 text-md border outline-none rounded-md w-full md:w-auto md:min-w-[500px]"
              placeholder="Search User by name or email"
            />
          </div>
        </div>
        <UsersTable />
      </div>
      <AddUserModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default UsersPage;
