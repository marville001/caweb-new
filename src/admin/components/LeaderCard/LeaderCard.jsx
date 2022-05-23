const LeaderCard = ({ leader, width }) => {
    return (
        <div
            className={`${
                width && "min-w-[" + width + "]"
            } bg-white shadow-sm pb-3 rounded-lg overflow-hidden`}
        >
            <div className=" w-full h-48 bg-gray-500">
                <img className="h-full w-full object-cover" src={leader?.image} alt="" />
            </div>
            <div className="p-4 text-center">
                <h4 className="text-dodge-blue font-medium">{leader?.name}</h4>
                <h4 className="text-dodge-blue font-medium my-2">{leader?.title?.title}</h4>
                {leader?.scc && (
                    <h4 className="font-medium my-2">
                        <span className="text-xs font-normal italic">From:</span> {leader?.scc?.name}
                    </h4>
                )}
            </div>
        </div>
    );
};

export default LeaderCard;
