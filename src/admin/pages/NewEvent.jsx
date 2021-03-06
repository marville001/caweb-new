import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchEventsAction } from "../../redux/actions/events";
import { post } from "../../redux/actions/http";
import parseError from "../../utils/parseError";
import ImageUpload from "../components/common/ImageUpload";

const NewEvent = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [imageError, setImageError] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddEvent = async (data) => {
        setImageError(false);

        if (!imageUrl) {
            setImageError(true);
            return;
        }

        try {
            setLoading(true);

            await post(
                `events/`,
                {
                    ...data,
                    image: imageUrl,
                    key: data.title.replaceAll(" ", "-").toLowerCase(),
                },
                "admin"
            );
            dispatch(fetchEventsAction({page: 1, pageSize: 10},"admin"));

            setLoading(false);
            toast.success("Event added successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            clearErrors();
            reset();
            navigate("/admin/events");
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
        <div className="px-2 sm:px-0">
            <Link
                to="/admin/events"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-2xl mx-auto _shadow rounded-md border-2">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            New Event
                        </h2>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />

                    <form
                        onSubmit={handleSubmit(handleAddEvent)}
                        className="my-10 flex flex-col gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="">
                                Event Title
                            </label>
                            <input
                                type="text"
                                placeholder="Enter event title here"
                                className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded"
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

                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="">
                                Event Date
                            </label>
                            <input
                                type="datetime-local"
                                className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded"
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

                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="">
                                Event Location
                            </label>
                            <input
                                type="text"
                                placeholder="Enter event location here"
                                className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: "Location is required",
                                    },
                                })}
                            />
                            {errors.location && (
                                <p className="text-red-600 text-xs mt-1">
                                    {errors.location.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="">
                                Group
                            </label>
                            <input
                                type="text"
                                placeholder="Enter group here"
                                className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded"
                                {...register("group", {
                                    required: {
                                        value: true,
                                        message: "Group is required",
                                    },
                                })}
                            />
                            {errors.group && (
                                <p className="text-red-600 text-xs mt-1">
                                    {errors.group.message}
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
                                rows={5}
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
                                            htmlFor="image-select"
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
                                <ImageUpload
                                    imageUrl={imageUrl}
                                    setUrl={setImageUrl}
                                />
                            )}
                            {imageError && (
                                <p className="text-red-600 text-xs mt-1">
                                    Image is required
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-dodge-blue px-8 py-3 text-xl mt-8 font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                        >
                            {loading && (
                                <FaSpinner className="mr-2 animate-spin" />
                            )}
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewEvent;
