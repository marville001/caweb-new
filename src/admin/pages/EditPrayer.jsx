import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
    editPrayerAction,
    getPrayers,
} from "../../redux/actions/admin/prayers";
import { get } from "../../redux/actions/http";

const EditPrayer = () => {
    const { isEditingPrayer } = useSelector((state) => state.prayersState);

    const [isFetching, setIsFetching] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        formState: { errors },
        setValue,
    } = useForm();

    const handleEditPrayer = async (data) => {
        const response = await dispatch(editPrayerAction(data, id));

        if (response.success) {
            toast.success("Prayer Updated successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            await dispatch(getPrayers());
            clearErrors();
            reset();
            navigate("/admin/prayers");
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

    useEffect(() => {
        const loadPrayer = async () => {
            try {
                setIsFetching(true);
                const res = await get(`prayers/${id}`);

                console.log(res);

                if (res?.prayer) {
                    const { title, prayer } = res?.prayer;
                    setValue("title", title);
                    setValue("prayer", prayer);
                }
                setIsFetching(false);
            } catch (error) {
                setIsFetching(false);
            }
        };

        loadPrayer();
    }, [id, setValue]);

    return (
        <div className="px-2 sm:px-0">
            <Link
                to="/admin/prayers"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-2xl mx-auto _shadow rounded-md border-2">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            Edit Prayer
                        </h2>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                    {isFetching ? (
                        <div className="py-5 flex justify-center">
                            <FaSpinner className="animate-spin text-xl" />
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit(handleEditPrayer)}
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
                                    Prayer
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Describe the event"
                                    rows={3}
                                    className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded"
                                    {...register("prayer", {
                                        required: {
                                            value: true,
                                            message: "Prayer is required",
                                        },
                                    })}
                                ></textarea>
                                {errors.prayer && (
                                    <p className="text-red-600 text-xs mt-1">
                                        {errors.prayer.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isEditingPrayer}
                                className="bg-dodge-blue px-8 py-3 text-xl mt-8 font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                            >
                                {isEditingPrayer && (
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

export default EditPrayer;
