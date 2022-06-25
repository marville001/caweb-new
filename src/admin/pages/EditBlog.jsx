import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import QuillEditor from "../components/common/QuillEditor";
import ReactHtmlParser from "react-html-parser";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { get,  put } from "../../redux/actions/http";
import parseError from "../../utils/parseError";
import ImageUpload from "../components/common/ImageUpload";

const EditBlog = () => {
    const { admin } = useSelector((state) => state.adminState);

    const [state, setState] = useState({
        blog: "",
        title: "",
        subtitle: "",
        intro: "",
        error: "",
        active: true,
        allowComments: true
    });
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [blog, setBlog] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    const { slug } = useParams();

    const navigate = useNavigate();

    const handleUpdateBlog = async (data) => {
        try {
            setLoading(true);
            const { error, ...details } = state;
            await put(
                `blogs/${blog?._id}`,
                {
                    ...details,
                    slug: details.title.toLowerCase().split(" ").join("-").replace(",", ""),
                    author: admin?._id,
                    image: imageUrl,
                },
                "admin"
            );

            setLoading(false);
            toast.success("Blog updated successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            navigate("/admin/blogs/");
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
        const loadBlog = async () => {
            try {
                setIsFetching(true);
                const res = await get(`blogs/${slug}`, "admin");
                if (res?.blog) {
                    setState({
                        blog: ReactHtmlParser(res?.blog?.blog).toString(),
                        title: res?.blog?.title,
                        subtitle: res?.blog?.subtitle,
                        intro: res?.blog?.intro ,
                        active: res?.blog?.active ,
                        allowComments: res?.blog?.allowComments ,
                        error: "",
                    });

                    setBlog(res?.blog)
                    setImageUrl(res?.blog?.image);
                }
                setIsFetching(false);
            } catch (error) {
                setIsFetching(false);
            }
        };

        loadBlog();
    }, [slug]);

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
                    {isFetching ? (
                        <div className="py-5 flex justify-center">
                            <FaSpinner className="animate-spin text-xl" />
                        </div>
                    ) : blog?._id ? (
                        <div>
                            <div className="flex items-center justify-between">
                                <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                                    Edit Post
                                </h2>
                            </div>
                            <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />

                            <div className="my-5 flex flex-col">
                                <input
                                    type="text"
                                    placeholder="Title..."
                                    value={state.title}
                                    onChange={(e) =>
                                        setState((prev) => ({
                                            ...prev,
                                            title: e.target.value,
                                        }))
                                    }
                                    className="placeholder:font-bold placeholder:text-2xl py-2 h-auto text-2xl font-bold border-0 focus:!border-0 focus:!ring-0 focus:!outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter subtitle (Optional)"
                                    value={state.subtitle}
                                    onChange={(e) =>
                                        setState((prev) => ({
                                            ...prev,
                                            subtitle: e.target.value,
                                        }))
                                    }
                                    className="placeholder:font-semibold placeholder:text-2xl py-2 h-auto font-medium text-2xl border-0 focus:!border-0 focus:!ring-0 focus:!outline-none"
                                />

                                <textarea
                                    type="text"
                                    placeholder="Enter intro (<100 characters of blog)"
                                    value={state.intro}
                                    onChange={(e) =>
                                        setState((prev) => ({
                                            ...prev,
                                            intro: e.target.value,
                                        }))
                                    }
                                    className="py-2 h-auto mt-6"
                                ></textarea>
                            </div>
                            <hr />
                            <div className="flex mt-2 flex-col gap-2">
                                <h4 className="-mb-4">Cover Image</h4>
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
                                                onClick={() => setImageUrl("")}
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
                                    onClick={handleUpdateBlog}
                                    disabled={loading}
                                    className="disabled:opacity-70 disabled:cursor-not-allowed border-2 bg-dodge-blue text-white rounded-md mt-2 inline-block px-4 py-1 cursor-pointer"
                                >
                                    {loading ? (
                                        <FaSpinner className="animate-spin" />
                                    ) : (
                                        "Update"
                                    )}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="py-5 flex justify-center">
                            <h2 className="text-xl font-bold uppercase opacity-75">
                                Blog Not Found
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditBlog;
