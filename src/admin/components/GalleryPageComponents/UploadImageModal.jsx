import React, { useRef } from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Modal from "../common/Modal";

const UploadImageModal = ({ isOpen, closeModal }) => {
  const [isUploading] = useState(false);
  const [image, setImage] = useState("");

  const imageRef = useRef();

  const handleCloseModal = () => {
    closeModal();
  };

  const handleUploadImage = () => {};

  return (
    <Modal isOpen={isOpen}>
      <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-top transition-all transform bg-white shadow-xl rounded-2xl">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Upload Image
        </h3>
        <div className="form-group my-4 flex-1">
          <input
            type="text"
            className="p-2 block border-slate-200 border-2 w-full rounded mt-2 outline-none"
            placeholder="Enter image title"
          />
        </div>
        <div className="form-group my-4 flex-1">
          <textarea
            type="text"
            className="p-2 block border-slate-200 border-2 w-full rounded mt-2 outline-none"
            placeholder="Enter image description"
          ></textarea>
        </div>
        <div className="form-group my-4 flex-1 flex items-center space-x-2">
            <label className="text-xl">Date</label>
          <input
            type="date"
            className="p-2 block border-slate-200 border-2 w-full rounded mt-2 outline-none"
            placeholder="Date"
          />
        </div>

        <div>
          <input
            onChange={(e) => setImage(e.target.files)}
            ref={imageRef}
            id="profile-image"
            className="hidden"
            // value={image}
            type="file"
          />
        </div>
        <div
          onClick={() => imageRef.current.click()}
          className="p-4  border-2 flex justify-center border-dashed cursor-pointer"
        >
          <span>
            {image?.length >= 1 ? image[0].name : "Click here to select image"}
          </span>
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
            disabled={isUploading}
            className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
            onClick={handleUploadImage}
          >
            {isUploading && <FaSpinner className="mr-2 animate-spin" />}
            Upload Image
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UploadImageModal;
