const LeaderCard = ({ img, name, title, group, width }) => {
    return (
        <div
            className={`${
                width && "min-w-[" + width + "]"
            } bg-white shadow-sm pb-3 rounded-lg overflow-hidden`}
        >
            <div className=" w-full h-48 bg-gray-500">
                <img className="h-full w-full object-cover" src={img} alt="" />
            </div>
            <div className="p-4 text-center">
                <h4 className="text-dodge-blue font-medium">{name}</h4>
                <h4 className="text-dodge-blue font-medium my-2">{title}</h4>
                {group && (
                    <h4 className="text-dodge-blue  font-medium my-2">
                        {group}
                    </h4>
                )}
            </div>
        </div>
    );
};

export default LeaderCard;
