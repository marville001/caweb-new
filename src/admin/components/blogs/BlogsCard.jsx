import React, { useState } from "react";
import { FaEdit, FaLongArrowAltRight, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { _delete } from "../../../redux/actions/http";
import { toast } from "react-toastify";
import parseError from "../../../utils/parseError";
import ConfirmDeleteModal from "../common/ConfirmDeleteModal";

const BlogsCard = ({ blog, loadBlogs }) => {
    const [deleteBlogModalOpen, setDeleteBlogModalOpen] = useState(false);

    const [deleting, setDeleting] = useState(false);

    const handleDeleteEvent = async () => {
        try {
            setDeleting(true);

            await _delete(`blogs/${blog._id}`, "admin");

            setDeleting(false);
            toast.success("Blog Deleted successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
			setDeleteBlogModalOpen(false);
			loadBlogs()
        } catch (error) {
            setDeleting(false);
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
        <div className="_shadow border-2 rounded-md overflow-hidden self-start">
            {/* eslint-disable-next-line no-template-curly-in-string */}
            <Link to={`/admin/blogs/${blog?.slug}`}>
                <img
                    src={
                        blog?.image
                            ? blog?.image
                            : "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image-300x225.png"
                    }
                    className="w-full h-52 object-fit"
                    alt=""
                    srcset=""
                />
            </Link>

            <div className="p-3">
                <div className="flex justify-between opacity-75">
                    <h3>
                        By: {blog?.author?.firstname} {blog?.author?.lastname}
                    </h3>
                    <p>{new Date(blog?.createdAt).toLocaleDateString()}</p>
                </div>

                <p className="font-semibold text-lg mt-3">{blog?.title}</p>

                <p className="mt-3">{blog?.intro + "..."}</p>

                <div className="flex justify-between mt-5 items-center  text-dodge-blue">
                    <Link
                        to={`/admin/blogs/${blog?.slug}`}
                        className="flex items-center gap-2 text-dodge-blue"
                    >
                        <span>Read More </span>
                        <FaLongArrowAltRight />
                    </Link>

                    <div className="flex items-center gap-3">
                        <FaTrashAlt onClick={() => setDeleteBlogModalOpen(true)} className="cursor-pointer text-red-300 hover:text-red-600" />
                        <Link to={`/admin/blogs/edit/${blog?.slug}`}>
                            <FaEdit className="cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </div>

            <ConfirmDeleteModal
                isOpen={deleteBlogModalOpen}
                closeModal={() => {
                    setDeleteBlogModalOpen(false);
                }}
                loading={deleting}
                message={`Please Confirm Deleting the Blog. This will erase all data about the blog including comments`}
                actionMethod={handleDeleteEvent}
            />
        </div>
    );
};

export default BlogsCard;
