import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get } from "../../redux/actions/http";
import { fetchLeadersAction } from "../../redux/actions/leaders";

const MainLeadership = () => {
    const { leaders } = useSelector((state) => state.leadersState);

    const [loadingMainLeaders, setLoadingMainLeaders] = useState(false);
    const [mainLeaders, setMainLeaders] = useState([]);

    const dispatch = useDispatch();

    const loadMainLeaders = async () => {
        try {
            setLoadingMainLeaders(true);
            const res = await get("main-leaders");
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
        dispatch(fetchLeadersAction());
    }, [dispatch]);

    return (
        <div className="container  py-14">
            <h1 className="text-3xl text-center text-dodge-blue font-bold">
                DEKUTCC Leadership & Structure
            </h1>

            {loadingMainLeaders && (
                <div className="my-4 flex justify-center">
                    <FaSpinner className="animate-spin text-2xl" />
                </div>
            )}

            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  my-10">
                {mainLeaders?.map((leader) => (
                    <div
                        key={leader?._id}
                        className={`w-full sm:w-auto sm:min-w-[250px]  bg-white shadow-sm pb-3 rounded-lg overflow-hidden`}
                    >
                        <div className=" w-full h-56 overflow-hidden bg-gray-500">
                            <img
                                className="w-full h-full object-cover object-top"
                                src={leader?.image}
                                alt=""
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h4 className="text-dodge-blue font-medium">
                                {leader?.name}
                            </h4>
                            <h4 className="text-dodge-blue font-medium my-2">
                                {leader?.title?.title || leader?.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-gray-100 pb-12 mt-10">
                <h4 className="text-center text-sea-green text-2xl lg:text-3xl mb-6">
                    Main Church Commitee
                </h4>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {leaders
                        ?.filter((leader) => leader?.churchCommittee === 1)
                        .map((leader) => (
                            <div
                                key={leader?._id}
                                className={`w-full sm:w-auto sm:min-w-[250px]  bg-white shadow-sm pb-3 rounded-lg overflow-hidden`}
                            >
                                <div className=" w-full h-48 bg-gray-500">
                                    <img
                                        className="h-full w-full object-cover object-top"
                                        src={leader?.image}
                                        alt=""
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h4 className="text-dodge-blue font-medium">
                                        {leader?.name}
                                    </h4>
                                    <h4 className="text-dodge-blue font-medium my-2">
                                        {leader?.title?.title || leader?.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        to="/leadership/scc"
                        className="px-10 py-2 text-white rounded-md bg-dodge-blue mt-10"
                    >
                        View SCC Leadership
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainLeadership;
