import React from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Modal from "../common/Modal";

const AddPrayerModal = ({ closeModal, isOpen }) => {
  const [title, setTitle] = useState("");
  const [prayer, setPrayer] = useState("");

  const handleCloseModal = () => {
    closeModal();
    setTitle("");
    setPrayer("");
  };

  const handleSubmit = () => {
    console.log({ title, prayer });
    handleCloseModal();
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-top transition-all transform bg-white shadow-xl rounded-2xl">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Add Prayer
        </h3>
        <div className="form-group my-3">
          <label htmlFor="title" className="text-lg block">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter prayer title"
            className="ring-1 focus:ring-slate-600 w-full p-2 rounded-sm mt-3 outline-none ring-offset-2"
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="title" className="text-lg block">
            Prayer
          </label>
          <textarea
            value={prayer}
            onChange={(e) => setPrayer(e.target.value)}
            type="text"
            placeholder="Type prayer here..."
            rows="6"
            className="ring-1 focus:ring-slate-600 w-full p-2 rounded-sm mt-3 outline-none ring-offset-2"
          ></textarea>
        </div>
        <div className="flex mt-4 justify-between">
          <button
            type="button"
            className="block bg-red-500 px-8 py-2 text-sm font-medium text-white rounded-md"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={false}
            className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
            onClick={handleSubmit}
          >
            {false && <FaSpinner className="mr-2 animate-spin" />}
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddPrayerModal;
