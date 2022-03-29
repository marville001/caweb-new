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
            <Link to="/admin/sccs" className="my-5 flex items-center text-sm space-x-3 cursor-pointer">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
                {sccs.map((scc, idx) => (
                    <Link
                        to={`/admin/sccs/${scc.key}`}
                        key={idx}
                        className="p-2 py-4 bg-dodge-blue text-center text-white rounded-md
                        cursor-pointer hover:-translate-y-1 hover:opacity-80
                        "
                    >
                        {scc.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SccPage;
