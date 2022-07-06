import React, { useEffect } from "react";
import { FaBible, FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSccsAction } from "../../redux/actions/admin/sccs";

const SccsPage = () => {
    const { sccs, isLoadingSccs } = useSelector((state) => state.sccsState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSccsAction());
    }, [dispatch]);

    return (
        <div className="px-2 sm:px-0">
            <h2 className="text-2xl text-dodge-blue font-bold">Scc Groups</h2>

            {isLoadingSccs && (
                <div className="my-5 flex items-center justify-center">
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
                        cursor-pointer hover:-translate-y-1 hover:opacity-80 flex justify-center items-center gap-4
                        "
                    >
                        <span>{scc.name}</span>
                        {scc?.category === "bible-study" && <FaBible />}
                    </Link>
                ))}

                <Link
                    to={`/admin/sccs/new`}
                    className="p-2 py-4 border-2 border-dodge-blue text-center text-dodge-blue rounded-md
                        cursor-pointer hover:-translate-y-1
                        "
                >
                    Add Scc Group
                </Link>
            </div>
        </div>
    );
};

export default SccsPage;
