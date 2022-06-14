import React, { useState } from "react";

import { FaMapMarkerAlt, FaTrash } from "react-icons/fa";
import ConfirmDeleteModal from "../common/ConfirmDeleteModal";

const EventCard = ({ event }) => {
    const [deleteEventModalOpen, setDeleteEventModalOpen] = useState(false);

    const handleDeleteEvent = async () => {};

    return (
        <div className="bg-white shadow overflow-hidden rounded-md self-start pb-2">
            <img
                src={event?.image}
                alt=""
                className="w-full h-48 object-cover"
            />

            <div className="p-2">
                <div className="flex justify-between">
                    <h4 className="text-lg font-bold opacity-80">
                        {event?.title}
                    </h4>
                    <h4 className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <span>{event?.location}</span>
                    </h4>
                </div>
                <p className="my-3 text-sm">{event?.description}</p>
                <hr />

                <div className="flex items-center justify-between">
                    <span className="font-medium rounded mt-2 block">
                        {new Date(event?.date).toUTCString()}
                    </span>

                    <FaTrash className="text-red-300 hover:text-red-500 cursor-pointer block mt-2 mr-2" onClick={()=>setDeleteEventModalOpen(true)} />
                </div>
            </div>

            <ConfirmDeleteModal
                isOpen={deleteEventModalOpen}
                closeModal={() => {
                    setDeleteEventModalOpen(false);
                }}
                loading={true}
                message={`Please Confirm Deleting the Event {${event?.title}}. This will erase all data about the event`}
                actionMethod={handleDeleteEvent}
            />
        </div>
    );
};

export default EventCard;
