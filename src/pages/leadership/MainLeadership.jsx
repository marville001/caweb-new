import { get } from "mongoose";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LeaderCard from "../../components/LeaderCard";
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

    console.log(leaders);

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

            <div className="flex justify-center mt-12">
                {mainLeaders?.map((leader) => (
                    <LeaderCard leader={leader} key={leader?._id} />
                ))}
            </div>
            <div className="bg-gray-100 pb-12 mt-10">
                <h4 className="text-center text-sea-green text-2xl lg:text-3xl mb-6">
                    Main Church Commitee
                </h4>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {leaders
                        ?.filter((leader) => leader?.churchCommittee === true)
                        .map((leader) => (
                            <LeaderCard key={leader?._id} leader={leader} />
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
