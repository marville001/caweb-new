import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLeadersAction } from "../../redux/actions/leaders";
import { fetchPositionsAction } from "../../redux/actions/positions";

import { FaChevronDown, FaChevronUp, FaSpinner } from "react-icons/fa";
import AddMainLeaderModal from "../components/leadership/AddMainLeaderModal";
import { get } from "../../redux/actions/http";
import MainLeaderCard from "../components/leadership/MainLeaderCard";

const ChurchLeadership = () => {
    const { leaders, loading } = useSelector((state) => state.leadersState);
    const { positions } = useSelector((state) => state.positionsState);

    const [addMainLeaderModalOpen, setAddMainLeaderModalOpen] = useState(false);

    const [showPositions, setShowPositions] = useState(false);
    const [showLeadership, setShowLeadership] = useState(false);
    const [showCommittee, setShowCommittee] = useState(false);
    const [loadingMainLeaders, setLoadingMainLeaders] = useState(false);
    const [mainLeaders, setMainLeaders] = useState([]);

    const dispatch = useDispatch();

    const loadMainLeaders = async () => {
        try {
            setLoadingMainLeaders(true);
            const res = await get("main-leaders", "admin");
            setLoadingMainLeaders(false);
            if (res?.mainleaders) {
                setMainLeaders(res.mainleaders);
            }
        } catch (error) {
            setLoadingMainLeaders(false);
        }
    };
    useEffect(() => {
        loadMainLeaders();
    }, []);

    useEffect(() => {
        dispatch(fetchLeadersAction("admin"));
        dispatch(fetchPositionsAction("admin"));
    }, [dispatch]);
    return (
        <div className="px-2 sm:px-0">
            <div className="my-6 p-2 sm:p-4 bg-white _shadow">
                <div
                    onClick={() => setShowPositions((prev) => !prev)}
                    className="flex gap-5 justify-between cursor-pointer items-center"
                >
                    <h2 className="font-bold text-lg">Leadership Positions</h2>

                    <div className="flex items-center space-x-2 py-2 cursor-pointer px-6 rounded-md text-seagreen  text-sm hover:opacity-75">
                        {showPositions ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                </div>
                <div
                    className={`grid grid-cols-1 transition-all duration-150 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 my-5 
                        ${showPositions ? "" : "h-0 hidden  overflow-hidden"}`}
                >
                    {positions.map((position) => (
                        <Link
                            to={`/admin/leaders/position/${position._id}`}
                            key={position._id}
                            className="_shadow px-6 py-3 flex items-center justify-center text-seagreen rounded-md hover:scale-[1.02] 
                                transition-all duration-150 ease-linear cursor-pointer
                                hover:opacity-80 hover:bg-slate-50"
                        >
                            <span>{position?.title}</span>
                        </Link>
                    ))}
                    <Link
                        to="/admin/leaders/position/new"
                        className="_shadow bg-steelblue bg-opacity-20 text-steelblue rounded-md px-6 py-3 flex items-center justify-center 
                                hover:scale-[1.02] transition-all duration-150 ease-linear cursor-pointer hover:bg-opacity-40"
                    >
                        <span>Add Position</span>
                    </Link>
                </div>

                {showPositions && (
                    <div className="my-2">
                        <button
                            onClick={() => setShowPositions(false)}
                            className="rounded bg-dodge-blue text-white text-sm px-6 py-1"
                        >
                            Hide
                        </button>
                    </div>
                )}
            </div>

            <div className="my-6 p-2 sm:p-4 bg-white _shadow">
                <div
                    onClick={() => setShowLeadership((prev) => !prev)}
                    className="flex gap-5 justify-between cursor-pointer items-center"
                >
                    <h2 className="font-bold text-lg">
                        Main Church Leadership
                    </h2>

                    <div className="flex items-center space-x-2 py-2 cursor-pointer px-6 rounded-md text-seagreen  text-sm hover:opacity-75">
                        {showLeadership ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                </div>

                <div
                    className={`${
                        showLeadership ? "" : "h-0 hidden  overflow-hidden"
                    }`}
                >
                    <div className="flex mt-5 justify-end gap-5 sm:gap-10">
                        <button
                            onClick={() => setAddMainLeaderModalOpen(true)}
                            className="p-2 bg-steelblue py-1 px-4 text-white font-normal rounded-md"
                        >
                            Add Leader
                        </button>
                    </div>

                    {loadingMainLeaders && (
                        <div className="my-4 flex justify-center">
                            <FaSpinner className="animate-spin text-2xl" />
                        </div>
                    )}

                    {mainLeaders?.length === 0 && !loadingMainLeaders ? (
                        <div className="my-4 flex justify-center">
                            <h2 className="text-xl font-bold uppercase opacity-75">
                                No Leader Under This category
                            </h2>
                        </div>
                    ) : (
                        <div
                            className={`grid grid-cols-1 transition-all duration-150 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5 
                        `}
                        >
                            {mainLeaders?.map((leader) => (
                                <MainLeaderCard
                                    key={leader?._id}
                                    leader={leader}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="my-6 p-2 sm:p-4 bg-white _shadow">
                <div
                    onClick={() => setShowCommittee((prev) => !prev)}
                    className="flex gap-5 justify-between cursor-pointer items-center"
                >
                    <h2 className="font-bold text-lg">Church Committee</h2>

                    <div className="flex items-center space-x-2 py-2 cursor-pointer px-6 rounded-md text-seagreen  text-sm hover:opacity-75">
                        {showCommittee ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                </div>
                <div
                    className={`${
                        showCommittee ? "" : "h-0 hidden  overflow-hidden"
                    }`}
                >
                    <div className="flex mt-5 justify-end gap-5 sm:gap-10">
                        <Link
                            to="/admin/leaders/new"
                            className="p-2 bg-steelblue py-1 px-4 text-white font-normal rounded-md"
                        >
                            Add Leader
                        </Link>
                    </div>

                    {loading && (
                        <div className="my-4 flex justify-center">
                            <FaSpinner className="animate-spin text-2xl" />
                        </div>
                    )}

                    <div
                        className={`grid grid-cols-1 transition-all duration-150 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5`}
                    >
                        {leaders
                            ?.filter(
                                (leader) => leader.churchCommittee === true
                            )
                            ?.map((leader) => (
                                <div
                                    key={leader._id}
                                    className="flex flex-col _shadow border-2 items-center py-4 rounded-lg"
                                >
                                    <img
                                        src={leader?.image}
                                        alt=""
                                        className="rounded-full h-[150px] w-[150px] "
                                    />
                                    <h4 className="mt-2 text-lg font-bold">
                                        {leader?.name}
                                    </h4>

                                    <h4 className="mb-2 text-lg font-bold opacity-60">
                                        {leader?.title?.title ?? "-"}
                                    </h4>
                                    <blockquote className="text-sm px-5 tracking-wide font-medium text-center italic">
                                        {leader?.description}
                                    </blockquote>

                                    <Link
                                        to={`/admin/leaders/${leader._id}/edit`}
                                        className="bg-transparent px-8 py-1 border-dodge-blue border-2 text-dodge-blue hover:text-white hover:bg-dodge-blue mt-4 rounded-full  items-center justify-center"
                                    >
                                        Update
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <AddMainLeaderModal
                isOpen={addMainLeaderModalOpen}
                closeModal={() => setAddMainLeaderModalOpen(false)}
                reloadLeaders={loadMainLeaders}
            />
        </div>
    );
};

export default ChurchLeadership;
