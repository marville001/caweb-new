import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import parse from "html-react-parser";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { get } from "../redux/actions/http";

const ReadNews = () => {
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(false);

    const { slug } = useParams();

    useEffect(() => {
        const loadBlog = async () => {
            try {
                setLoading(true);
                const res = await get(`blogs/${slug}`, "admin");

                console.log(res);

                if (res?.blog) {
                    setBlog(res?.blog);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        loadBlog();
    }, [slug]);

    return (
        <div className="px-2 sm:px-0 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="my-10 bg-white px-2 sm:px-8 py-10">
                    <div className="inline-block">
                        <Link
                            to="/news"
                            className="my-5 flex items-center justify-start text-sm space-x-3 cursor-pointer"
                        >
                            <FaChevronLeft /> <span>Go Back</span>
                        </Link>
                    </div>

                    {loading ? (
                        <div className="py-5 flex justify-center">
                            <FaSpinner className="animate-spin text-xl" />
                        </div>
                    ) : blog?._id ? (
                        <div>
                            <h5 className="">
                                {new Date(blog?.createdAt).toDateString()}
                            </h5>
                            <h2 className="text-xl font-bold my-5">
                                {blog?.title}
                            </h2>

                            <div className="flex_ hidden items-center gap-4">
                                <img
                                    src={blog?.author?.avatar}
                                    className="w-10 h-10 rounded-full"
                                    alt=""
                                />
                                <div>
                                    <h3 className="font-bold">
                                        {blog?.author?.firstname}{" "}
                                        {blog?.author?.lastname}
                                    </h3>
                                    <p>@{blog?.author?.username}</p>
                                </div>
                            </div>

                            <div className="my-5">
                                <img
                                    src={blog?.image}
                                    className="w-full max-h-[400px] object-fit rounded-lg"
                                    alt=""
                                />
                            </div>

                            <div
                                className="
                        my-4 mx-auto prose prose-sm sm:prose-md md:prose-lg max-w-none
                        prose-h2:my-4 prose-h1:my-5 prose-p:my-2 prose-headings:my-4 prose-a:text-dodge-blue prose-strong:text-dodge-blue
                        prose-video:w-full prose-video:aspect-video
                        "
                            >
                                {parse(ReactHtmlParser(blog?.blog).toString())}
                            </div>
                        </div>
                    ) : (
                        <div className="py-5 flex flex-col items-center justify-center">
                            <h2 className="text-xl font-bold uppercase opacity-75">
                                Item Not Found
                            </h2>

                            <Link
                                to="/news"
                                className="bg-sea-green px-6 py-1 block mt-5 rounded-md text-white"
                            >
                                View News
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReadNews;
