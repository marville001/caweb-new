import { FaLongArrowAltRight, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useBlogs } from "../contexts/blogs.context";

const News = () => {
    
    const {loading, blogs, total, setPageSize, pageSize} = useBlogs()

    return (
        <div className="container  py-14">
            <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold tracking-wider">
                Our News
            </h1>
            {loading && (
                <div className="flex py-6 justify-center">
                    <FaSpinner className="animate-spin text-3xl" />
                </div>
            )}{" "}
            {blogs?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:mt-8 py-12">
                    {blogs.map((blog, i) => (
                        <div
                            key={blog?._id}
                            className="_shadow border-2 rounded-md overflow-hidden self-start"
                        >
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
            

            {/* Load more button */}
            {blogs.length < total && blogs.length !== 0 && (
                <div className="flex justify-center">
                    <button
                        type="button"
                        disabled={loading}
                        className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                        onClick={() => {
                            setPageSize(pageSize + 10);
                        }}
                    >
                        {loading && <FaSpinner className="mr-2 animate-spin" />}
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default News;
