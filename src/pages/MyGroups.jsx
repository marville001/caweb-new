import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import { getSccsAction } from "../redux/actions/admin/sccs";
import MyAccountGroupCard from "../components/MyAccountGroupCard";

const MyGroups = () => {
    const { user } = useSelector((state) => state.accountUsers);
    const { sccs, isLoadingSccs } = useSelector((state) => state.sccsState);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSccsAction());
    }, [dispatch]);

    useEffect(() => {
        if (!localStorage.token) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <div className="max-w-4xl mx-auto bg-white my-16 p-2 sm:p-6 pb-28 min-h-[700px]">
            <h2 className="text-3xl text-dodge-blue font-bold">
                Manage Account
            </h2>
            <hr className="my-4" />
            <div className="flex flex-col lg:flex-row lg:divide-x-2">
                <div className="px-2 sm:px-5 py-4 pb-10 min-w-[200px]">
                    <ul className="flex flex-wrap flex-row lg:flex-col items-center lg:items-start md:space-x-2 lg:space-x-0 lg:space-y-3  gap-4 lg:gap-0">
                        <li>
                            <Link
                                to="/my-account"
                                className="text-lg tracking-wider font-light"
                            >
                                Account Details
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/my-account/groups"
                                className="text-lg tracking-wider font-light"
                            >
                                My Groups
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/my-account/subscriptions"
                                className="text-lg tracking-wider font-light"
                            >
                                My Subscription
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="px-2 sm:px-5  flex-1">
                    <h4 className="text-xl font-bold  opacity-80">Major Scc</h4>
                    <div
                        style={{
                            background: `url(${user?.scc?.image})`,
                        }}
                        className="inline-block mt-4 rounded-lg bg-cover overflow-hidden"
                    >
                        <div className=" bg-dodge-blue text-3xl w-full  px-20 py-4 text-white text-center bg-opacity-60">
                            <h3>{user?.scc?.name}</h3>
                        </div>
                    </div>

                    <hr className="my-8" />

                    <p className="font-sans text-lg">
                        Join any group below to receive updates via email about
                        their activities
                    </p>

                    {/*Minor */}
                    <div className="gap-4 my-6">
                        <h4 className="text-xl font-bold opacity-80">
                            Join Minor Scc
                        </h4>

                        {isLoadingSccs ? (
                            <div className="my-5 px-4 text-xl">
                                <FaSpinner className="animate-spin" />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 my-6">
                                {sccs
                                    ?.filter((scc) => scc.category === "minor")
                                    ?.map((scc) => (
                                        <MyAccountGroupCard scc={scc} />
                                    ))}
                            </div>
                        )}
                    </div>

                    <hr className="mt-8" />

                    {/*Minor */}
                    <div className="gap-4 my-6">
                        <h4 className="text-xl font-bold opacity-80">
                            Join Bible Study Group
                        </h4>

                        {isLoadingSccs ? (
                            <div className="my-5 px-4 text-xl">
                                <FaSpinner className="animate-spin" />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 my-6">
                                {sccs
                                    ?.filter(
                                        (scc) => scc.category === "bible-study"
                                    )
                                    ?.map((scc) => (
                                        <MyAccountGroupCard scc={scc} />
                                    ))}
                            </div>
                        )}
                    </div>

                    {/* <button className="bg-sea-green px-10 py-1 my-2 rounded-md text-white uppercase block">
                        Update
                    </button> */}

                    <hr className="my-8" />
                </div>
            </div>
        </div>
    );
};

export default MyGroups;
