import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { get } from "../redux/actions/http";

const News = () => {
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
        <div className="container  py-14">
            <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold tracking-wider">
                Our News
            </h1>

            {loading ? (
                <div className="flex py-6 justify-center">
                    <FaSpinner className="animate-spin text-3xl" />
                </div>
            ) : blogs?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:mt-8 py-12">
                    {blogs.map((blog, i) => (
                        <div className="_shadow border-2 rounded-md overflow-hidden self-start">
                            {/* eslint-disable-next-line no-template-curly-in-string */}
                            <Link to={`/news/${blog?.slug}`}>
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
                                <div className="flex justify-end opacity-75">
                                    <h3 className="hidden">
                                        By: {blog?.author?.firstname}{" "}
                                        {blog?.author?.lastname}
                                    </h3>
                                    <p>
                                        {new Date(
                                            blog?.createdAt
                                        ).toLocaleDateString()}
                                    </p>
                                </div>

                                <p className="font-semibold text-lg mt-3">
                                    {blog?.title}
                                </p>

                                <p className="mt-3">{blog?.intro + "..."}</p>

                                <div className="flex justify-between mt-5 items-center  text-dodge-blue">
                                    <Link
                                        to={`/news/${blog?.slug}`}
                                        className="flex items-center gap-2 text-dodge-blue"
                                    >
                                        <span>Read More </span>
                                        <FaLongArrowAltRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex py-6 justify-center text-3xl ">
                    <h3 className="font-bold uppercase opacity-70 tracking-wider">
                        No Blogs yet
                    </h3>
                </div>
            )}

            {9 > 10 && (
                <div className="py-6 flex justify-center">
                    <button className="bg-sea-green text-white py-3  px-8 text-lg font-medium -tracking-tighter hover:opacity-90">
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default News;
