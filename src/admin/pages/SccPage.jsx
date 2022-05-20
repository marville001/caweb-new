import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaEdit, FaSpinner } from "react-icons/fa";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSccAction, getSccsAction } from "../../redux/actions/admin/sccs";
import { fetchEventsAction } from "../../redux/actions/events";
import { put } from "../../redux/actions/http";

import parseError from "../../utils/parseError";

const SccPage = () => {
    const { scc, isLoadingScc } = useSelector((state) => state.sccsState);

    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(false);

    const { key } = useParams();
    const dispatch = useDispatch();

    const handleUploadSccgallery = async (e) => {
        const { files } = e.target;

        if (files.length === 0) return;

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("file", files[0]);
            formData.append("upload_preset", "dekutca-chaplaincy");
            formData.append("cloud_name", "dyzn9g0lr");

            const { data } = await axios.post(
                "https://api.cloudinary.com/v1_1/dyzn9g0lr/image/upload",
                formData
            );

            const res = await put(
                `sccs/gallery/${scc._id}`,
                { image: data.url },
                "admin"
            );

            setGallery([res.image, ...gallery]);

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

    useEffect(() => {
        setGallery(scc?.gallery);
    }, [scc?.gallery]);

    useEffect(() => {
        dispatch(getSccAction(key));
        dispatch(getSccsAction());
        dispatch(fetchEventsAction("admin"));
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
                to="/admin/sccs"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-2xl mx-auto">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            About Group
                        </h2>

                        <Link
                            className="text-dodge-blue flex items-center space-x-2"
                            to={`/admin/sccs/${key}/edit`}
                        >
                            <FaEdit />
                            <span>Edit Scc</span>
                        </Link>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                    {scc.key ? (
                        <>
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl text-dodge-blue">
                                    {scc.name}
                                </h2>
                                <h3 className="opacity-70">Name</h3>
                            </div>

                            <div className="my-4 w-full overflow-hidden rounded-lg flex gap-3">
                                <img
                                    className="w-full rounded-lg h-52 object-cover object-center cursor-pointer"
                                    src={scc.image}
                                    alt=""
                                />
                            </div>
                            <div className="my-5">
                                <div className="w-full h-[1px] bg-gray-500 opacity-25 mb-5" />

                                <h2 className="text-2xl text-dodge-blue mb-5">
                                    {scc.name} Gallery
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-3 my-4 gap-4">
                                    {gallery?.map((image) => (
                                        <div key={image}>
                                            <img
                                                className="w-full h-40"
                                                src={image}
                                                alt=""
                                            />
                                        </div>
                                    ))}
                                    <label
                                        htmlFor="image_select"
                                        className={`border flex h-40 items-center justify-center cursor-pointer border-dashed  border-dodge-blue py-1 px-5 text-sm rounded-md text-dodge-blue ${
                                            loading &&
                                            "cursor-not-allowed bg-gray-100"
                                        }`}
                                    >
                                        {loading ? (
                                            <FaSpinner className="text-xl animate-spin" />
                                        ) : (
                                            "Add Image To Gallery"
                                        )}
                                    </label>
                                </div>

                                <input
                                    type="file"
                                    name=""
                                    id="image_select"
                                    disabled={loading}
                                    className="hidden"
                                    onChange={handleUploadSccgallery}
                                />
                            </div>

                            <div className="w-full h-[1px] bg-gray-500 opacity-25 my-3" />

                            <h3 className="opacity-70">description</h3>
                            <div className="my-4 w-full">
                                <p>{scc.description}</p>
                            </div>
                        </>
                    ) : (
                        <div>
                            <h4 className="font-mono text-dodge-blue font-bold">
                                Scc not Added yet
                            </h4>
                        </div>
                    )}
                </div>

                <div className="bg-white p-6 mt-3">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            Scc Leadership
                        </h2>

                        <Link
                            className="text-dodge-blue flex items-center space-x-2"
                            to={`/admin/sccs/${key}`}
                        >
                            <HiPlusCircle />
                            <span>Add Leader</span>
                        </Link>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                </div>
            </div>
        </div>
    );
};

export default SccPage;
