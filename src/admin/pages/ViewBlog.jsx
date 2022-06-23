import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import QuillEditor from "../components/common/QuillEditor";

import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../../redux/actions/http";
import parseError from "../../utils/parseError";
import ImageUpload from "../components/common/ImageUpload";

const ViewBlog = () => {
    const { admin } = useSelector((state) => state.adminState);

    const [state, setState] = useState({
        blog: "",
        title: "",
        subtitle: "",
        intro: "",
        error: "",
    });
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    const navigate = useNavigate();

    const handleSaveBlog = async (data) => {
        try {
            setLoading(true);
            const { error, ...details } = state;
            await post(
                "blogs",
                {
                    ...details,
                    slug: details.title.toLowerCase().split(" ").join("-").replace(",", ""),
                    author: admin?._id,
                    image: imageUrl
                },
                "admin"
            );

            setLoading(false);
            toast.success("Blog added successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setState({
                blog: "",
                title: "",
                subtitle: "",
                error: "",
            });
            navigate("/admin/blogs");
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
                to="/admin/blogs"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-3xl mx-auto _shadow rounded-md border-2">
                <div className="bg-white p-6">                    
                </div>
            </div>
        </div>
    );
};

export default ViewBlog;
