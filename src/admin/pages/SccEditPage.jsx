import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSccAction } from "../../redux/actions/admin/sccs";
import { put } from "../../redux/actions/http";

import parseError from "../../utils/parseError";

const SccEditPage = () => {
    const { scc, isLoadingScc } = useSelector((state) => state.sccsState);

    const [loading, setLoading] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [image, setImage] = useState("");

    const { key } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, setValue } = useForm();

    const handleImageChange = async (e) => {
        const { files } = e.target;

        if (files.length === 0) return;

        setIsUploadingImage(true);
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "dekutca-chaplaincy");
        formData.append("cloud_name", "dekutcatholicchaplaincy");

        const { data } = await axios.post(
            "https://api.cloudinary.com/v1_1/dekutcatholicchaplaincy/image/upload",
            formData
        );

        setIsUploadingImage(false);
        setImage(data.url);
        setValue("image", data.url);
    };

    const handleUpdateScc = async (data) => {
        if (data.key.trim().includes(" ")) {
            toast.error("Key should not have a space", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
            });
            return;
        }
        try {
            setLoading(true);

            const res = await put(`sccs/${scc._id}`, {...data, image}, "admin");

            setLoading(false);
            toast.success("Scc Updated successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            navigate("/admin/sccs/" + res?.scc?.key);
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
        if (scc._id) {
            setValue("name", scc?.name);
            setValue("category", scc?.category);
            setValue("description", scc?.description);
            setValue("key", scc?.key);
            setImage(scc?.image);
        }
    }, [scc, setValue]);

    useEffect(() => {
        dispatch(getSccAction(key));
    }, [dispatch, key]);

    if (isLoadingScc) {
        return (
            <div className="my-5 flex items-center justify-cdenter">
                <div className="animate-spin">
                    <FaSpinner className="w-8 h-8" />
                </div>
            </div>
        );
    }

    return (
        <div className="px-2 sm:px-0">
            <Link
                to={`/admin/sccs/${key}`}
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-2xl mx-auto">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            Edit Scc
                        </h2>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                    {scc.key ? (
                        <>
                            <div className="my-4 w-full overflow-hidden rounded-lg flex flex-col gap-3">
                                <img
                                    className="w-full rounded-lg h-52 object-cover object-center cursor-pointer"
                                    src={image}
                                    alt=""
                                />

                                <label
                                    htmlFor="image_select"
                                    className={`border flex self-start items-center justify-center cursor-pointer border-dashed  border-dodge-blue py-1 px-5 text-sm rounded-md text-dodge-blue ${
                                        loading &&
                                        "cursor-not-allowed bg-gray-100"
                                    }`}
                                >
                                    {isUploadingImage ? (
                                        <FaSpinner className="text-xl animate-spin" />
                                    ) : (
                                        "Change Image"
                                    )}
                                </label>
                            </div>

                            <div className="w-full h-[1px] bg-gray-500 opacity-25 my-3" />

                            <form
                                className=""
                                onSubmit={handleSubmit(handleUpdateScc)}
                            >
                                <input
                                    type="file"
                                    name=""
                                    id="image_select"
                                    disabled={loading}
                                    className="hidden"
                                    onChange={handleImageChange}
                                />

                                <h3 className="opacity-70">Name</h3>
                                <input
                                    type="text"
                                    className="w-full mt-2 mb-4"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required",
                                        },
                                    })}
                                />

                                <h3 className="opacity-70">Key (No Space) </h3>
                                <input
                                    type="text"
                                    className="w-full mt-2 mb-4"
                                    {...register("key", {
                                        required: {
                                            value: true,
                                            message: "Key is required",
                                        },
                                    })}
                                />

                                <h3 className="opacity-70">Category</h3>
                                <select
                                    type="text"
                                    className="focus:ring-slate-600 w-full sp-2 rounded-md mt-2 mb-3 outline-none"
                                    {...register("category", {
                                        required: {
                                            value: true,
                                            message: "Category is required",
                                        },
                                    })}
                                >
                                    <option value=""></option>
                                    <option value="major">Major Scc</option>
                                    <option value="minor">Minor Scc</option>
                                    <option value="bible-study">Bible Study Group</option>
                                </select>

                                <h3 className="opacity-70">description</h3>
                                <textarea
                                    type="text"
                                    className="w-full mt-2 mb-4 rounded-lg"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Description is required",
                                        },
                                    })}
                                    rows={4}
                                ></textarea>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                                >
                                    {loading && (
                                        <FaSpinner className="mr-2 animate-spin" />
                                    )}
                                    Submit
                                </button>
                            </form>
                        </>
                    ) : (
                        <div>
                            <h4 className="font-mono text-dodge-blue font-bold">
                                Scc not Added yet
                            </h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SccEditPage;
