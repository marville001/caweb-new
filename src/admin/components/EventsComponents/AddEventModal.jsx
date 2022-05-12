import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { put } from "../../../redux/actions/http";
import parseError from "../../../utils/parseError";
import Modal from "../common/Modal";
const AddEventModal = ({ closeModal, isOpen }) => {
    const { sccs } = useSelector((state) => state.sccsState);

    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageError, setImageError] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm();

    const handleCloseModal = () => {
        closeModal();
        setImage("");
        clearErrors();
        reset();
        setImageUrl();
        setImageError(false);
    };

    const handleImageChange = (e) => {
        const { files } = e.target;

        if (files.length === 0) return;

        setImageUrl(URL.createObjectURL(files[0]));
        setImage(files[0]);
    };

    const handleAddEvent = async (data) => {
        setImageError(false);

        if (!imageUrl) {
            setImageError(true);
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("image", image);
            formData.append("title", data.title);
            formData.append("date", data.date);
            formData.append("group", data.group);
            formData.append("description", data.description);

            await put(`events/`, formData, "admin");

            setLoading(false);
            toast.success("Image added successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (error) {
            setLoading(false);
            toast.error(parseError(error), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    console.log(image);

    return (
        <Modal isOpen={isOpen}>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
                Create Event
            </h3>
            <form onSubmit={handleSubmit(handleAddEvent)}>
                <div className="sm:flex sm:space-x-2">
                    <div className="form-group my-3 flex-[2]">
                        <label htmlFor="title" className="text-sm block">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter prayer title"
                            className="ring-1 focus:ring-slate-600 w-full p-2 py-1 rounded-sm mt-3 outline-none ring-offset-2"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: "Title is required",
                                },
                            })}
                        />
                        {errors.title && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    <div className="form-group my-3 flex-1">
                        <label htmlFor="title" className="text-sm block">
                            Date
                        </label>
                        <input
                            type="date"
                            placeholder="Enter prayer title"
                            className="text-sm ring-1 focus:ring-slate-600 w-full p-2 py-1 rounded-sm mt-3 outline-none ring-offset-2"
                            {...register("date", {
                                required: {
                                    value: true,
                                    message: "Date is required",
                                },
                            })}
                        />
                        {errors.date && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.date.message}
                            </p>
                        )}
                    </div>
                </div>

                {imageUrl ? (
                    <>
                        <img
                            src={imageUrl}
                            alt=""
                            className="h-48 rounded-md w-full object-cover"
                        />
                        <label
                            htmlFor="image-select"
                            className="border-2 mt-2 inline-block px-4 py-1 cursor-pointer"
                        >
                            Change
                        </label>
                    </>
                ) : (
                    <div className="mb-5">
                        <p className="text-sm block">Event Image</p>
                        <label
                            htmlFor="image-select"
                            className="p-4 mt-3 border-2 flex justify-center border-dashed cursor-pointer"
                        >
                            <p></p>

                            <span className="mx-2 overflow-hidden">
                                {image?.length >= 1
                                    ? image[0].name
                                    : "Click here to select image"}
                            </span>
                        </label>
                        {imageError && (
                            <p className="text-red-600 text-xs mt-1">
                                Image is required
                            </p>
                        )}
                    </div>
                )}
                <input
                    onChange={handleImageChange}
                    id="image-select"
                    className="hidden"
                    accept="image/*"
                    type="file"
                />

                <div className="form-group my-3 flex-[2]">
                    <label htmlFor="title" className="text-sm block">
                        Group
                    </label>
                    <select
                        type="text"
                        placeholder="Enter prayer title"
                        className="ring-1 focus:ring-slate-600 w-full p-2 py-1 rounded-sm mt-3 outline-none ring-offset-2"
                        {...register("group", {
                            required: {
                                value: true,
                                message: "Group is required",
                            },
                        })}
                    >
                        <option value=""></option>
                        {sccs.map((scc) => (
                            <option value={scc.name}>{scc.name}</option>
                        ))}
                    </select>
                    {errors.group && (
                        <p className="text-red-600 text-xs mt-1">
                            {errors.group.message}
                        </p>
                    )}
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="title" className="text-sm block">
                        Description
                    </label>
                    <textarea
                        type="text"
                        placeholder="Type description here..."
                        rows="6"
                        className="ring-1 focus:ring-slate-600 w-full p-2 py-1 rounded-sm mt-3 outline-none ring-offset-2"
                        {...register("description", {
                            required: {
                                value: true,
                                message: "Description is required",
                            },
                        })}
                    ></textarea>
                    {errors.description && (
                        <p className="text-red-600 text-xs mt-1">
                            {errors.description.message}
                        </p>
                    )}
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
                        type="submit"
                        disabled={loading}
                        className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                    >
                        {loading && <FaSpinner className="mr-2 animate-spin" />}
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddEventModal;
