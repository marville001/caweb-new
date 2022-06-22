import { Link } from "react-router-dom";
import { FaEdit, FaLongArrowAltRight } from "react-icons/fa";

const Blogs = () => {
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
                {[1, 2, 3, 4, 5, 6].map((blog, i) => (
                    <div
                        className="_shadow border-2 rounded-md overflow-hidden"
                        key={i}
                    >
                        {/* eslint-disable-next-line no-template-curly-in-string */}
                        <Link to="/admin/blogs/${blog?.slug}">
                            <img
                                src="https://static.dw.com/image/55042452_101.jpg"
                                className="w-full h-52 object-fit"
                                alt=""
                                srcset=""
                            />
                        </Link>

                        <div className="p-3">
                            <div className="flex justify-between opacity-75">
                                <h3>By: Martin Mwangi</h3>
                                <p>{new Date().toDateString()}</p>
                            </div>

                            <p className="font-semibold text-lg mt-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>

                            <p className="font-sans mt-3">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. A inventore reprehenderit
                                ratione.
                            </p>

                            <div className="flex justify-between mt-5 items-center  text-dodge-blue">
                                <Link
                                    to="/admin/blogs/${blog?.slug}"
                                    className="flex items-center gap-2 text-dodge-blue"
                                >
                                    <span>Read More </span>
                                    <FaLongArrowAltRight />
                                </Link>

                                <Link to="/admin/blogs/edit/${blog.slug}">
                                    <FaEdit className="cursor-pointer" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
