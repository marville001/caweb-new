import React, { useEffect } from "react";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSccAction } from "../../redux/actions/admin/sccs";

const sccs = [
    { title: "St Angelus", key: "stangelus", subtitle: "the dancers" },
];

const SccPage = () => {
    const { scc, isLoadingScc } = useSelector((state) => state.sccsState);

    const { key } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSccAction(key));
    }, [dispatch, key]);

    return (
        <div className="px-2 sm:px-0">
            <Link
                to="/admin/sccs"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <h2 className="text-2xl text-dodge-blue font-bold">{scc.name}</h2>
            {isLoadingScc && (
                <div className="my-5 flex items-center justify-cdenter">
                    <div className="animate-spin">
                        <FaSpinner className="w-8 h-8" />
                    </div>
                </div>
            )}
            <div className="my-4 w-full sm:w-[400px] overflow-hidden rounded-lg">
                <img
                    className="w-full h-52 object-cover object-center"
                    src={process.env.REACT_APP_UPLOADS_URL + scc.image}
                    alt=""
                />
            </div>
            <div className="my-4 w-full sm:w-[400px]">
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
        </div>
    );
};

export default SccPage;
