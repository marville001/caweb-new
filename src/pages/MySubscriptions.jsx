import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MySubscriptions = () => {
    const { user } = useSelector((state) => state.accountUsers);

    const navigate = useNavigate();

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
                <div className="px-2 sm:px-5 py-4 pb-10 min-w-[200px] h-full">
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
                <div className="px-2 sm:px-5  flex-1 min-h-[550px]">
                    <h4 className="my-4 text-center font-bold uppercase opacity-50 text-xl">
                        No Subscription Yet
                    </h4>

                    <hr className="mt-8" />
                </div>
            </div>
        </div>
    );
};

export default MySubscriptions;
