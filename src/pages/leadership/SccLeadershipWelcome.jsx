import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSccsAction } from "../../redux/actions/admin/sccs";

export default function SccLeadershipWelcome() {
    const { sccs, isLoadingSccs } = useSelector((state) => state.sccsState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSccsAction());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="w-full px-2 py-16 sm:px-0">
                <h3 className="mt-6 text-center text-dodge-blue text-3xl font-bold uppercase">
                    Our SCC Leaderships
                </h3>
                <p className="font-md text-center mt-4">
                    Please select Scc from list below
                </p>

                {isLoadingSccs ? (
                    <div className="flex py-10 justify-center">
                        <FaSpinner className="animate-spin text-lg" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-6 gap-5">
                        {sccs.map(({ key, name, _id }) => (
                            <Link
                                to={`/scc/leaders/${_id}`}
                                key={key}
                                className="
                          bg-white py-4 px-2 shadow-md text-center  hover:-translate-y-1
                            hover:bg-dodge-blue hover:text-white rounded-md sm:py-6 
                            transition-all duration-150 ease-in group
                        "
                            >
                                <h2 className="text-md font-bold text-dodge-blue group-hover:text-white">
                                    {name}
                                </h2>
                                {/* <p className="text-sm italic mt-2">{name}</p> */}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
