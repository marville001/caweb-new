import React, { useEffect } from "react";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSccAction } from "../../redux/actions/admin/sccs";

const SccPage = () => {
    const { scc, isLoadingScc } = useSelector((state) => state.sccsState);

    const { key } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSccAction(key));
    }, [dispatch, key]);

    if (isLoadingScc) {
        return (
            <div className="my-5 flex items-center justify-cdenter">
                <div className="animate-spin">
                    <FaSpinner className="w-8 h-8" />
                </div>
            </div>
        );
    }

    return (
        <div className="px-2 sm:px-0">
            <Link
                to="/admin/sccs"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-2xl mx-auto">
                <div className="bg-white p-6">
                    <h2 className="font-3xl mb-3 font-bold uppercase opacity-50 tracking-widest font-mono">
                        About Group
                    </h2>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                    {scc.key ? (
                        <>
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl text-dodge-blue">
                                    {scc.name}
                                </h2>
                                <h3 className="opacity-70">Name</h3>
                            </div>

                            <div className="my-4 w-full overflow-hidden rounded-lg flex gap-3">
                                <img
                                    className="w-full sm:w-1/2 rounded-lg h-52 object-cover object-center cursor-pointer"
                                    src={
                                        process.env.REACT_APP_UPLOADS_URL +
                                        scc.image
                                    }
                                    alt=""
                                />
                            </div>
                            <button className="bg-dodge-blue px-5 py-1 text-white text-sm">Add Image</button>
                            <div className="my-4 w-full">
                                <p>{scc.description}</p>
                            </div>
                            <div className="my-4 border-t border-t-red-50 py-2 w-full sm:w-[400px] flex space-x-5">
                                <button className="bg-red-300 text-red-800 py-1 px-5 inline rounded-md cursor-pointer">
                                    Delete
                                </button>
                                <button className="bg-dodge-blue text-white py-1 px-5 inline rounded-md cursor-pointer">
                                    Edit
                                </button>
                            </div>
                        </>
                    ) : (
                        <div>
                            <h4 className="font-mono text-dodge-blue font-bold">
                                Scc not Added yet
                            </h4>
                        </div>
                    )}
                </div>

                <div className="bg-white p-6 mt-3">
                    <h2 className="font-3xl mb-3 font-bold uppercase opacity-50 tracking-widest font-mono">
                        Scc Events
                    </h2>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default SccPage;
