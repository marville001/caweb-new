import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";
import { get } from "../../redux/actions/http";
import BlogsCard from "../components/blogs/BlogsCard";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [total, setTotal] = useState(10);
    const [loading, setLoading] = useState(false);

    const [pageSize, setPageSize] = useState(5);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const loadBlogs = async ({ page = 1, pageSize = 10, search = "" }) => {
        try {
            setLoading(true);
            const res = await get(
                `blogs?page=${page}&pagesize=${pageSize}&search=${search}`,
                "admin"
            );
            setLoading(false);
            if (res?.blogs) {
                setBlogs(res.blogs);
                setTotal(res.total);
            }
        } catch (error) {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        if (search === "") {
            loadBlogs({ page, pageSize, search: "" });
            return;
        }

        loadBlogs({
            page,
            pageSize,
            search,
        });
    };

    useEffect(() => {
        loadBlogs({ page, pageSize, search: "" });
    }, [page, pageSize]);

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

            <form onSubmit={handleSearch} className="pb-2 mt-5">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    className="p-3 text-md border outline-none rounded-md w-full md:w-auto md:min-w-[500px]"
                    placeholder="Search blog here..."
                />
            </form>

            {loading && (
                <div className="flex py-6 justify-center">
                    <FaSpinner className="animate-spin text-3xl" />
                </div>
            )}

            {blogs?.length > 0 ? (
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

            {/* Load more button */}
            {blogs.length < total && blogs.length !== 0 && (
                <div className="flex justify-center">
                    <button
                        type="button"
                        disabled={loading}
                        className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                        onClick={() => {
                            setPageSize(pageSize + 5);
                            setPage(1);
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

export default Blogs;
