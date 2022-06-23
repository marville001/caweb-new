import { Link } from "react-router-dom";
import {
    FaEdit,
    FaLongArrowAltRight,
    FaSpinner,
    FaTrash,
    FaTrashAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { get } from "../../redux/actions/http";
import BlogsCard from "../components/blogs/BlogsCard";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadBlogs = async () => {
        try {
            setLoading(true);
            const res = await get("blogs", "admin");
            setLoading(false);
            if (res?.blogs) {
                setBlogs(res.blogs);
            }
        } catch (error) {
            setLoading(false);
        }
    };
    useEffect(() => {
        loadBlogs();
    }, []);

    return (
        <div className="px-2 sm:px-0">
            <div className="flex justify-between items-center">
                <h4 className="text-2xl text-dodge-blue font-bold">Blogs</h4>
                <Link
                    to="/admin/blogs/new"
                    className="p-2 bg-steelblue py-1 px-4 text-white uppercase font-normal rounded-md"
                >
                    New Post
                </Link>
            </div>

            {loading ? (
                <div className="flex py-6 justify-center">
                    <FaSpinner className="animate-spin text-3xl" />
                </div>
            ) : blogs?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
                    {blogs?.map((blog, i) => (
                        <BlogsCard
                            loadBlogs={loadBlogs}
                            key={blog?._id}
                            blog={blog}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex py-6 justify-center text-3xl ">
                    <h3 className="font-bold uppercase opacity-70 tracking-wider">
                        No Blogs yet
                    </h3>
                </div>
            )}
        </div>
    );
};

export default Blogs;
