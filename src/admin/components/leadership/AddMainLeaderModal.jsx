import React from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Modal from "../common/Modal";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import ImageUpload from "../common/ImageUpload";
import parseError from "../../../utils/parseError";
import { post } from "../../../redux/actions/http";

const AddMainLeaderModal = ({
    closeModal,
    isOpen,
    reloadLeaders = () => {},
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [imageError, setImageError] = useState("");

    const handleCloseModal = () => {
        closeModal();
        reset();
    };

    const handlAddLeader = async (data) => {
        setImageError(false);

        if (!imageUrl) {
            setImageError(true);
            return;
        }

        try {
            setLoading(true);
            await post("main-leaders", {...data, image:imageUrl}, "admin");
            setLoading(false);

            toast.success("Leader added successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            handleCloseModal();
            reloadLeaders();
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

    return (
        <Modal isOpen={isOpen}>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
                Add Leader
            </h3>
            <form onSubmit={handleSubmit(handlAddLeader)}>
                <div className="form-group my-4 flex-1">
                    <label>Name</label>
                    <input
                        type="text"
                        className={`p-3 block border-slate-200 border-2 w-full mt-2 ${
                            errors.name &&
                            "border-red-300 placeholder:text-red-300"
                        }`}
                        placeholder="Enter Name..."
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required",
                            },
                        })}
                    />
                    {errors?.name && (
                        <p className="text-red-300 text-sm mt-1 mb-4">
                            {errors?.name?.message}
                        </p>
                    )}
                </div>
                <div className="form-group my-4 flex-1">
                    <label>Title</label>
                    <input
                        type="text"
                        className={`p-3 block border-slate-200 border-2 w-full mt-2 ${
                            errors.title &&
                            "border-red-300 placeholder:text-red-300"
                        }`}
                        placeholder="Enter Title..."
                        {...register("title", {
                            required: {
                                value: true,
                                message: "Title is required",
                            },
                        })}
                    />
                    {errors?.title && (
                        <p className="text-red-300 text-sm mt-1 mb-4">
                            {errors?.title?.message}
                        </p>
                    )}
                </div>
                <div className="form-group my-2 flex-1">
                    <label>Description</label>
                    <textarea
                        type="text"
                        rows="2"
                        className={`p-3 py-2 block border-slate-200 border-2 w-full mt-2 ${
                            errors.description &&
                            "border-red-300 placeholder:text-red-300"
                        }`}
                        placeholder="Description"
                        {...register("description", {
                            required: {
                                value: true,
                                message: "Description is required",
                            },
                        })}
                    ></textarea>
                    {errors?.description && (
                        <p className="text-red-300 text-sm mt-1 mb-4">
                            {errors?.description?.message}
                        </p>
                    )}
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
                                    onClick={() => setImageUrl("")}
                                    htmlFor="image-select"
                                    className="border-2 bg-dodge-blue text-white rounded-md mt-2 inline-block px-4 py-1 cursor-pointer"
                                >
                                    Change
                                </label>
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

export default AddMainLeaderModal;
