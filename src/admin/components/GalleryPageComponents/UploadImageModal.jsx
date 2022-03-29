import React, { useRef } from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getImages, uploadImage } from "../../../redux/actions/admin/images";
import Modal from "../common/Modal";

const UploadImageModal = ({ isOpen, closeModal }) => {
  const { isUploadingImage } = useSelector((state) => state.imagesState);
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const imageRef = useRef();

  const handleCloseModal = () => {
    closeModal();
    setImage("");
    setTitle("");
    setDate("");
    setDescription("");
  };

  const handleUploadImage = async () => {
    if (!image || !date || !title || !description) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image[0]);
    formData.append("title", title);
    formData.append("date", date);
    formData.append("description", description);

    const response = await dispatch(uploadImage(formData));

    if (response.success) {
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleCloseModal();
      await dispatch(getImages());
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
          Upload Image
        </h3>
        <div className="form-group my-4 flex-1">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 block border-slate-200 border-2 w-full rounded mt-2 outline-none"
            placeholder="Enter image title"
          />
        </div>
        <div className="form-group my-4 flex-1">
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 block border-slate-200 border-2 w-full rounded mt-2 outline-none"
            placeholder="Enter image description"
          ></textarea>
        </div>
        <div className="form-group my-4 flex-1 flex items-center space-x-2">
          <label className="text-xl">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            accept="image/*"
            type="file"
          />
        </div>
        <div
          onClick={() => imageRef.current.click()}
          className="p-4 mb-8 border-2 flex justify-center border-dashed cursor-pointer"
        >
          <span className="mx-2 overflow-hidden">
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
            disabled={isUploadingImage}
            className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
            onClick={handleUploadImage}
          >
            {isUploadingImage && <FaSpinner className="mr-2 animate-spin" />}
            Upload Image
          </button>
        </div>
    </Modal>
  );
};

export default UploadImageModal;
