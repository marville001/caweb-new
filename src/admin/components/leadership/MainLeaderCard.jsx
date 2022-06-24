import React, { useState } from "react";
import EditMainLeaderModal from "./EditMainLeaderModal";

const MainLeaderCard = ({ leader, reloadLeaders=()=>{} }) => {
	const [editMainLeaderModalOpen, setEditMainLeaderModalOpen] = useState(false);

    return (
        <div className="flex flex-col _shadow border-2 items-center py-4 rounded-lg">
            <img
                src={leader?.image}
                alt=""
                className="rounded-full h-[150px] w-[150px] "
            />
            <h4 className="mt-2 text-lg font-bold">{leader?.name}</h4>

            <h4 className="mb-2 text-lg font-bold opacity-60">
                {leader?.title}
			</h4>
			
            <button onClick={()=>setEditMainLeaderModalOpen(true)} className="bg-transparent px-8 py-1 border-dodge-blue border-2 text-dodge-blue hover:text-white hover:bg-dodge-blue mt-4 rounded-full  items-center justify-center">
                Update
			</button>
			
			<EditMainLeaderModal
                isOpen={editMainLeaderModalOpen}
                closeModal={() => setEditMainLeaderModalOpen(false)}
				reloadLeaders={reloadLeaders}
				leader={leader}
            />
        </div>
    );
};

export default MainLeaderCard;
