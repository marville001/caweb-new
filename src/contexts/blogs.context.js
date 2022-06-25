import { createContext, useContext, useEffect, useState } from "react";
import { get } from "../redux/actions/http";


const BlogContext = createContext(null)

const BlogsProvider =  ({ children }) => {
	const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(10);

    const [pageSize, setPageSize] = useState(10);
	const [page, setPage] = useState(1);
	
	const loadBlogs = async ({ page = 1, pageSize = 10, search = "" }) => {
        try {
            setLoading(true);
            const res = await get(
                `blogs?page=${page}&pagesize=${pageSize}&search=${search}`
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
    useEffect(() => {
        loadBlogs({ page, pageSize, search: "" });
	}, [page, pageSize]);
	

	return <BlogContext.Provider value={{blogs, loading, total, setPageSize, setPage, pageSize}}>
		{children}
	</BlogContext.Provider>
}

export const useBlogs = () => useContext(BlogContext);


export default BlogsProvider