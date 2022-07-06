import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addScc, getSccsAction } from "../../redux/actions/admin/sccs";
import ImageUpload from "../components/common/ImageUpload";

const NewScc = () => {
    const { isCreatingScc } = useSelector((state) => state.sccsState);

    const [imageUrl, setImageUrl] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm();

    const handleAddScc = async (data) => {
        const obj = {
            ...data,
            image: imageUrl,
            key: data.name.replaceAll(" ", "").toLowerCase(),
        };

        const response = await dispatch(addScc(obj));

        if (response.success) {
            toast.success("Scc added successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            await dispatch(getSccsAction());
            clearErrors();
            reset();
            navigate("/admin/sccs");
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
        <div className="px-2 sm:px-0">
            <Link
                to="/admin/sccs"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-2xl mx-auto _shadow rounded-md border-2">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            New Scc Group
                        </h2>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />

                    {isCreatingScc ? (
                        <div className="py-5 flex justify-center">
                            <FaSpinner className="animate-spin text-xl" />
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit(handleAddScc)}
                            className="my-10 flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-2">
                                <label className="">Scc Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter event title here"
                                    className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required",
                                        },
                                    })}
                                />
                                {errors.name && (
                                    <p className="text-red-600 text-xs mt-1">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="">Category</label>

                                <select
                                    {...register("category", {
                                        required: {
                                            value: true,
                                            message: "Category is required",
                                        },
                                    })}
                                    type="text"
                                    className="focus:ring-slate-600 w-full p-2 mt-3 outline-none rounded-md"
                                >
                                    <option value=""></option>
                                    <option value="major">Major Scc</option>
                                    <option value="minor">Minor Scc</option>
                                    <option value="bible-study">
                                        Bible Study Group
                                    </option>
                                </select>
                                {errors.category && (
                                    <p className="text-red-600 text-xs mt-1">
                                        {errors.category.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="title" className="">
                                    Description
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Describe the event"
                                    rows={3}
                                    className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded"
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
                                                htmlFor="profile-image"
                                                className="border-2 bg-dodge-blue text-white rounded-md mt-2 inline-block px-4 py-1 cursor-pointer"
                                            >
                                                Change
                                            </label>
                                        </div>
                                    </div>
                                ) : (
                                    <ImageUpload
                                        imageUrl={imageUrl}
                                        setUrl={setImageUrl}
                                    />
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isCreatingScc}
                                className="bg-dodge-blue px-8 py-3 text-xl mt-8 font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                            >
                                {isCreatingScc && (
                                    <FaSpinner className="mr-2 animate-spin" />
                                )}
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewScc;
