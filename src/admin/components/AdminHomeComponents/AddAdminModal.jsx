import React from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createAdmin, getAdmins } from "../../../redux/actions/admin/users";
import Modal from "../common/Modal";

const AddAdminModal = ({ closeModal, isOpen }) => {
  const { isCreatingAdmin } = useSelector((state) => state.usersState);

  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    closeModal();
    setEmail("");
  };

  const handleAddAdmin = async () => {
    const response = await dispatch(createAdmin(email));

    if (response.success) {
      toast.success("Admin added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleCloseModal();
      await dispatch(getAdmins());
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
      <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-top transition-all transform bg-white shadow-xl rounded-2xl">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Add Admin Users
        </h3>
        <p className="text-xs my-4">
          Ensure you have added the user before trying to make him an admin
        </p>
        <div className="form-group my-4 flex-1">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="p-2 py-1 block border-slate-200 border-2 w-full rounded mt-2 outline-none"
            placeholder="Enter users email "
          />
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
            disabled={isCreatingAdmin}
            className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
            onClick={handleAddAdmin}
          >
            {isCreatingAdmin && <FaSpinner className="mr-2 animate-spin" />}
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddAdminModal;
