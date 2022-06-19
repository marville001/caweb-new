import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { put } from "../redux/actions/http";
import parseError from "../utils/parseError";

const MyAccountGroupCard = ({ scc }) => {
    const { user } = useSelector((state) => state.accountUsers);

    const [isJoining, setIsJoining] = useState(false);

    const handleJoinGroup = async () => {
        try {
            setIsJoining(true);
            const res = await put(`users/join-group/${scc?._id}/${user?._id}`);

            console.log(res);
            setIsJoining(false);

            toast.success("Joined group successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
		} catch (error) {
			console.log(error);
            setIsJoining(false);
            toast.error(parseError(error), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${scc?.image})`,
            }}
            key={scc._id}
            className="inline-block _shadow mt-4 bg-cover rounded-lg overflow-hidden"
        >
            <div className=" bg-dodge-blue w-full h-full  p-4 text-white bg-opacity-70">
                <h3 className="font-bold">{scc?.name}</h3>

				<button
					disabled={isJoining}
                    onClick={handleJoinGroup}
                    className="bg-dodge-blue mt-4 py-2 px-6 rounded-md text-sm text-white disabled:opacity-80 disabled:cursor-not-allowed"
                >
                    {isJoining ? <FaSpinner className="animate-spin" /> : "Join"}
                </button>
            </div>
        </div>
    );
};

export default MyAccountGroupCard;
