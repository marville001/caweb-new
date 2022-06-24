import React from "react";

const MainLeaderCard = ({ leader }) => {
    return (
        <div className="flex flex-col _shadow border-2 items-center py-4 rounded-lg">
            <img
                src={leader?.image}
                alt=""
                className="rounded-full h-[150px] w-[150px] "
            />
            <h4 className="mt-2 text-lg font-bold">{leader?.name}</h4>

            <h4 className="mb-2 text-lg font-bold opacity-60">
                {leader?.title?.title ?? "-"}
            </h4>
            <blockquote className="text-sm px-5 tracking-wide font-medium text-center italic">
                {leader?.description}
            </blockquote>

            <button className="bg-transparent px-8 py-1 border-dodge-blue border-2 text-dodge-blue hover:text-white hover:bg-dodge-blue mt-4 rounded-full  items-center justify-center">
                Update
            </button>
        </div>
    );
};

export default MainLeaderCard;
