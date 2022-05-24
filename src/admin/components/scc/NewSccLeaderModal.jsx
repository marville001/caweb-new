import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { post } from "../../../redux/actions/http";
import { fetchLeadersAction } from "../../../redux/actions/leaders";
import parseError from "../../../utils/parseError";
import ImageUpload from "../common/ImageUpload";
import Modal from "../common/Modal";

const year = new Date().getFullYear() - 2;
const years = Array.from(new Array(5), (val, index) => index + year);

const NewSccLeaderModal = ({ closeModal, isOpen, currentScc }) => {
    const { positions } = useSelector((state) => state.positionsState);
    const { sccs } = useSelector((state) => state.sccsState);

    const [imageUrl, setImageUrl] = useState("");
    const [imageError, setImageError] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        setValue,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const handleAddLeader = async (data) => {
        setImageError(false);

        if (!imageUrl) {
            setImageError(true);
            return;
        }

        try {
            setLoading(true);

            await post(
                `leaders/`,
                {
                    ...data,
                    image: imageUrl,
                    churchCommittee: false,
                    groupId: currentScc,
                },
                "admin"
            );
            dispatch(fetchLeadersAction("admin"));

            setLoading(false);
            toast.success("Leader added successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            clearErrors();
            reset();
            closeModal();
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
        setValue("scc", currentScc);
    }, [currentScc, setValue]);

    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="bg-white">
                <div className="flex items-center justify-between">
                    <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                        New Church Leader
                    </h2>
                </div>
                <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />

                <form
                    onSubmit={handleSubmit(handleAddLeader)}
                    className="my-10 flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <label className="">Name</label>
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
                        <label className="flex items-center gap-5">
                            <input
                                type="checkbox"
                                className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded"
                                {...register("isActive")}
                            />{" "}
                            Active Leader
                        </label>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="">Title</label>
                        <select
                            className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: "Title is required",
                                },
                            })}
                        >
                            <option value="">Select leadership Title</option>
                            {positions?.map((position) => (
                                <option value={position._id} key={position._id}>
                                    {position.title}
                                </option>
                            ))}
                        </select>
                        {errors.title && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="">Member Scc</label>
                        <select
                            className="focus:!sring-0 disabled:cursor-not-allowed focus:!outline-none focus:!bottom-0 !rounded"
                            {...register("scc", {
                                required: {
                                    value: true,
                                    message: "Scc is required",
                                },
                            })}
                            disabled
                        >
                            <option value="">Select Main Scc</option>
                            {sccs?.map((scc) => (
                                <option value={scc._id} key={scc._id}>
                                    {scc.name}
                                </option>
                            ))}
                        </select>
                        {errors.scc && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.scc.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="">Active Period</label>
                        <select
                            className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded"
                            {...register("period", {
                                required: {
                                    value: true,
                                    message: "Period is required",
                                },
                            })}
                        >
                            <option value="">Select Period</option>
                            {years.map((year) => (
                                <option
                                    value={year + "-" + year + 1}
                                    key={year}
                                >
                                    {year + "-" + (year + 1)}
                                </option>
                            ))}
                        </select>
                        {errors.period && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.period.message}
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
                                        htmlFor="image-select"
                                        className="border-2 bg-dodge-blue text-white rounded-md mt-2 inline-block px-4 py-1 cursor-pointer"
                                        onClick={() => setImageUrl("")}
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
                        {imageError && (
                            <p className="text-red-600 text-xs mt-1">
                                Profile picture is required
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-dodge-blue px-8 py-3 text-xl mt-8 font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                    >
                        {loading && <FaSpinner className="mr-2 animate-spin" />}
                        Submit
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default NewSccLeaderModal;
