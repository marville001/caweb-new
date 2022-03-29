import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddSccModal from "../components/SccsPageComponents/AddSccModal";

const sccs = [
    { title: "St Angelus", key: "stangelus", subtitle: "the dancers" },
    { title: "St Peters", key: "stpeters", subtitle: "the dancers" },
    { title: "St Joseph", key: "stangelus", subtitle: "the dancers" },
    { title: "St Gabriel", key: "stgabriel", subtitle: "the dancers" },
    { title: "St Paul Gents", key: "stpaul", subtitle: "the dancers" },
    {
        title: "St Catherine Ladies",
        key: "stcatherine",
        subtitle: "the dancers",
    },
];

const SccsPage = () => {
    let [addSccModalOpen, setAddSccModalOpen] = useState(false);

    const closeAddSccModal = () => {
        setAddSccModalOpen(false);
    };

    const openAddSccModal = () => {
        setAddSccModalOpen(true);
    };

    return (
        <div className="px-2 sm:px-0">
            <h2 className="text-2xl text-dodge-blue font-bold">Scc Groups</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
                {sccs.map((scc, idx) => (
                    <Link
                        to={`/admin/sccs/${scc.key}`}
                        key={idx}
                        className="p-2 py-4 bg-dodge-blue text-center text-white rounded-md
                        cursor-pointer hover:-translate-y-1 hover:opacity-80
                        "
                    >
                        {scc.title}
                    </Link>
                ))}

                <div
                    onClick={openAddSccModal}
                    className="p-2 py-4 border-2 border-dodge-blue text-center text-dodge-blue rounded-md
                        cursor-pointer hover:-translate-y-1
                        "
                >
                    Add Scc Group
                </div>
            </div>

            <AddSccModal
                isOpen={addSccModalOpen}
                closeModal={closeAddSccModal}
            />
        </div>
    );
};

export default SccsPage;
