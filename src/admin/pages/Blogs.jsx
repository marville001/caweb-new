import { Link } from "react-router-dom";
import { FaEdit, FaLongArrowAltRight, FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";
import { get } from "../../redux/actions/http";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
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

        loadBlogs();
    }, []);

    console.log(blogs);

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
                        <div
                            className="_shadow border-2 rounded-md overflow-hidden"
                            key={blog?._id}
                        >
                            {/* eslint-disable-next-line no-template-curly-in-string */}
                            <Link to={`/admin/blogs/${blog?.slug}`}>
                                <img
                                    src="https://static.dw.com/image/55042452_101.jpg"
                                    className="w-full h-52 object-fit"
                                    alt=""
                                    srcset=""
                                />
                            </Link>

                            <div className="p-3">
                                <div className="flex justify-between opacity-75">
                                    <h3>By: {blog?.author?.firstname} {blog?.author?.lastname}</h3>
                                    <p>{new Date(blog?.createdAt).toUTCString()}</p>
                                </div>

                                <p className="font-semibold text-lg mt-3">
                                   {blog?.title}
                                </p>

                                <div className="flex justify-between mt-5 items-center  text-dodge-blue">
                                    <Link
                                        to={`/admin/blogs/${blog?.slug}`}
                                        className="flex items-center gap-2 text-dodge-blue"
                                    >
                                        <span>Read More </span>
                                        <FaLongArrowAltRight />
                                    </Link>

                                    <Link to={`/admin/blogs/edit/${blog?.slug}`}>
                                        <FaEdit className="cursor-pointer" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex py-6 justify-center text-3xl ">
                    <h3 className="font-bold uppercase opacity-70 tracking-wider">No Blogs yet</h3>
                </div>
            )}
        </div>
    );
};

export default Blogs;
