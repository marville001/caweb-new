import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/admin/users";
import AddUserModal from "../components/UsersPageComponents/AddUserModal";

import UsersTable from "../components/UsersPageComponents/UsersTable";

const UsersPage = () => {
  const { users, loading, error } = useSelector((state) => state.usersState);

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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

        <div className="bg-white px-4 py-3 flex">
          <div className="flex items-center space-x-2">
            <span>Rows</span>
            <select
              name="pageSize"
              className="text-sm p-1 bg-white rounded-md outline-none cursor-pointer border-2 border-slate-600"
              id=""
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>

        <UsersTable />
      </div>
      <AddUserModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default UsersPage;
