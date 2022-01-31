import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUsers, } from "../../../redux/actions/admin/users";
import Modal from "../common/Modal";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const AddUserModal = ({ isOpen, closeModal }) => {
  const {  isAddingUser } = useSelector(
    (state) => state.usersState
  );
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    scc: "",
  });

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    closeModal();
    setInputs({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      scc: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    const response = await dispatch(addUser(inputs));

    if (response.success) {
      toast.success("User added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleCloseModal();
      await dispatch(getUsers());
      
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Modal isOpen={isOpen}>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Add User
        </h3>
        <div className="mt-2">
          <div className="md:flex md:gap-2">
            <div className="form-group my-4 flex-1">
              <label htmlFor="firstname" className="text-lg text-slate-600">
                Firstname
              </label>
              <input
                value={inputs.firstname}
                onChange={handleInputChange}
                name="firstname"
                type="text"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your firstname..."
              />
            </div>
            <div className="form-group my-4 flex-1">
              <label htmlFor="lastname" className="text-lg text-slate-600">
                Lastname
              </label>
              <input
                value={inputs.lastname}
                onChange={handleInputChange}
                name="lastname"
                type="text"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your lastname..."
              />
            </div>
          </div>
          <div className="md:flex md:gap-2">
            <div className="form-group my-4 flex-1">
              <label htmlFor="username" className="text-lg text-slate-600">
                Username
              </label>
              <input
                value={inputs.username}
                onChange={handleInputChange}
                name="username"
                type="text"
                id="username"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your username..."
              />
            </div>
            <div className="form-group my-4 flex-1">
              <label htmlFor="scc" className="text-lg text-slate-600">
                SCC Group
              </label>
              <select
                value={inputs.scc}
                onChange={handleInputChange}
                name="scc"
                id="scc"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
              >
                <option value="">Select your scc</option>
                <option value="stpeters">St Peters</option>
                <option value="stangelus">St Angelus</option>
                <option value="stjoseph">St Joseph</option>
              </select>
            </div>
          </div>
          <div className="md:flex md:gap-2">
            <div className="form-group my-4 flex-1">
              <label htmlFor="email" className="text-lg text-slate-600">
                Email
              </label>
              <input
                value={inputs.email}
                onChange={handleInputChange}
                name="email"
                type="email"
                id="email"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your email..."
              />
            </div>
            <div className="form-group my-4 flex-1">
              <label htmlFor="password" className="text-lg text-slate-600">
                Password
              </label>
              <input
                value={inputs.password}
                onChange={handleInputChange}
                name="password"
                id="password"
                type="password"
                className="p-2 block border-slate-200 border-2 w-full rounded mt-2"
                placeholder="Enter your password..."
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <button
            type="button"
            className="block bg-red-500 px-8 py-2 text-sm font-medium text-white rounded-md"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={isAddingUser}
            className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
            onClick={handleRegister}
          >
              {isAddingUser && <FaSpinner className="mr-2 animate-spin" />}
            Submit
          </button>
        </div>
    </Modal>
  );
};

export default AddUserModal;
