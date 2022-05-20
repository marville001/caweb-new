import React, { useRef } from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getImages, uploadImage } from "../../../redux/actions/admin/images";
import ImageUpload from "../common/ImageUpload";
import Modal from "../common/Modal";

const UploadImageModal = ({ isOpen, closeModal }) => {
    const { isUploadingImage } = useSelector((state) => state.imagesState);
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [imageUrl, setImageUrl] = useState("");
    const [imageError, setImageError] = useState("");

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
        if (!imageUrl || !date || !title || !description) {
            alert("All fields are required!");
            return;
        }

        const data = {
            image: imageUrl,
            title,
            date,
            description,
        };

        const response = await dispatch(uploadImage(data));

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
            <div className="flex flex-col gap-2">
                {imageUrl ? (
                    <div>
                        <img
                            src={imageUrl}
                            alt=""
                            className="h-48 rounded-md w-full object-cover"
                        />
                        <div className="flex justify-between">
                            <label
                                htmlFor="profile-image"
                                className="border-2 bg-dodge-blue text-white rounded-md mt-2 inline-block px-4 py-1 cursor-pointer"
                            >
                                Change
                            </label>
                            <div
                                onClick={() => setImageUrl("")}
                                className="border-2 rounded-md mt-2 inline-block px-4 py-1 cursor-pointer"
                            >
                                Reset
                            </div>
                        </div>
                    </div>
                ) : (
                    <ImageUpload imageUrl={imageUrl} setUrl={setImageUrl} />
                )}
                {imageError && (
                    <p className="text-red-600 text-xs mt-1">
                        Image is required
                    </p>
                )}
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
                    {isUploadingImage && (
                        <FaSpinner className="mr-2 animate-spin" />
                    )}
                    Upload Image
                </button>
            </div>
        </Modal>
    );
};

export default UploadImageModal;
