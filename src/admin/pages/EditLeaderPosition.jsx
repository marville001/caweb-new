import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { get, put } from "../../redux/actions/http";
import { fetchPositionsAction } from "../../redux/actions/positions";
import parseError from "../../utils/parseError";

const EditLeaderPosition = () => {
    const [loading, setLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        formState: { errors },
        setValue,
    } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    const handleEditLeader = async (data) => {
        try {
            setLoading(true);

            await put(`positions/${id}`, data, "admin");

            setLoading(false);
            toast.success("Position Updated successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            clearErrors();
            reset();
            navigate("/admin/leaders");
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

    useEffect(() => {
        dispatch(fetchPositionsAction("admin"));
    }, [dispatch]);

    useEffect(() => {
        const loadPosition = async () => {
            try {
                setIsFetching(true);
                const res = await get(`positions/${id}`, "admin");

                if (res?.position) {
                    const { title, description } = res?.position;
                    setValue("title", title);
                    setValue("description", description);
                }
                setIsFetching(false);
            } catch (error) {
                setIsFetching(false);
            }
        };

        loadPosition();
    }, [id, setValue]);

    return (
        <div className="px-2 sm:px-0">
            <Link
                to="/admin/leaders"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-2xl mx-auto _shadow rounded-md border-2">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            Edit Leader Position
                        </h2>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />

                    {isFetching ? (
                        <div className="py-5 flex justify-center">
                            <FaSpinner className="animate-spin text-xl" />
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit(handleEditLeader)}
                            className="my-10 flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-2">
                                <label className="">Title</label>
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
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-dodge-blue px-8 py-3 text-xl mt-8 font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                            >
                                {loading && (
                                    <FaSpinner className="mr-2 animate-spin" />
                                )}
                                Update
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditLeaderPosition;
