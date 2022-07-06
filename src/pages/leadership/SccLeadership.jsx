import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LeaderCard from "../../components/LeaderCard";
import { getSccsAction } from "../../redux/actions/admin/sccs";
import { fetchLeadersAction } from "../../redux/actions/leaders";

export default function SccLeadership() {
    const { leaders, loading: loading_leaders } = useSelector(
        (state) => state.leadersState
    );
    const { sccs, isLoadingSccs } = useSelector((state) => state.sccsState);

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLeadersAction("", id));
        dispatch(getSccsAction());
    }, [dispatch, id]);

    return (
        <div className="container">
            {loading_leaders || isLoadingSccs ? (
                <div className="flex my-10 justify-center text-2xl animate-spin">
                    <FaSpinner />
                </div>
            ) : (
                <div className="w-full px-2 py-16 sm:px-0">
                    <h3 className="my-6 text-center text-dodge-blue text-3xl font-bold uppercase">
                        {sccs.find((scc) => scc._id === id)?.name}
                    </h3>
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {leaders
                            ?.filter(
                                (leader) =>
                                    leader.churchCommittee === 0 &&
                                    leader.groupId === id &&
                                    leader.scc === id
                            )
                            .map((leader) => (
                                <LeaderCard scc={true} key={leader?._id} leader={leader} />
                            ))}
                    </div>
                    {leaders?.filter(
                        (leader) =>
                            leader.churchCommittee === 0 &&
                            leader.groupId === id &&
                            leader.scc === id
                    ).length === 0 && (
                        <h2 className="text-center my-6 font-bold text-2xl uppercase opacity-30">
                            No Leader Found
                        </h2>
                    )}
                </div>
            )}
        </div>
    );
}
