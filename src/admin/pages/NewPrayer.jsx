import React from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addPrayer, getPrayers } from "../../redux/actions/admin/prayers";

const NewPrayer = () => {
    const { isCreatingPrayer } = useSelector((state) => state.prayersState);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm();

    const handleAddPrayer = async (data) => {
        const response = await dispatch(addPrayer(data));

        if (response.success) {
            toast.success("Prayer added successfully", {
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
                            New Prayer
                        </h2>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />

                    <form
                        onSubmit={handleSubmit(handleAddPrayer)}
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
                            disabled={isCreatingPrayer}
                            className="bg-dodge-blue px-8 py-3 text-xl mt-8 font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                        >
                            {isCreatingPrayer && (
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

export default NewPrayer;
