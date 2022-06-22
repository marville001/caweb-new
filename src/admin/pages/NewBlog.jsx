import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createAboutAction, fetchAboutAction } from "../../redux/actions/about";
import QuillEditor from "../components/common/QuillEditor";

import ReactHtmlParser from "react-html-parser";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewBlog = () => {
    const { about } = useSelector((state) => state.aboutState);

    const [state, setState] = useState({
        blog: "",
        title: "",
        subtitle: "",
    });
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSaveAbout = async (data) => {
        setLoading(true);
        const res = dispatch(createAboutAction(state, about?._id));

        setTimeout(() => {
            setLoading(false);
        }, 500);

        if (!res.success) {
            toast.error(res.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }
        toast.success("Event added successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className="px-2 sm:px-0">
            <Link
                to="/admin/blogs"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-3xl mx-auto _shadow rounded-md border-2">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            New Post
                        </h2>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />

                    <div className="my-5 flex flex-col">
                        <input
                            type="text"
                            placeholder="Title..."
                            className="placeholder:font-bold placeholder:text-2xl py-2 h-auto text-2xl font-bold border-0 focus:!border-0 focus:!ring-0 focus:!outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Enter subtitle (Optional)"
                            className="placeholder:font-semibold placeholder:text-2xl py-2 h-auto font-medium text-2xl border-0 focus:!border-0 focus:!ring-0 focus:!outline-none"
                        />
                    </div>

                    <div className="my-5">
                        <QuillEditor
                            value={state.blog}
                            handleChange={(value) =>
                                setState((prev) => ({
                                    ...prev,
                                    blog: value,
                                }))
                            }
                            placeholder="Start typing here ..."
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={handleSaveAbout}
                            disabled={loading}
                            className="disabled:opacity-70 disabled:cursor-not-allowed border-2 bg-dodge-blue text-white rounded-md mt-2 inline-block px-4 py-1 cursor-pointer"
                        >
                            {loading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                "Save"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBlog;
