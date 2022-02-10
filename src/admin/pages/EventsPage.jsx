import React, { useState } from "react";
import AddEventModal from "../components/EventsComponents/AddEventModal";

const EventsPage = () => {
    let [addEventModalOpen, setAddEventModalOpen] = useState(false);

    return (
        <div className="p-4">
            <div className="flex justify-between">
                <h4 className="text-2xl text-dodge-blue font-bold">Events</h4>
                <button
                    onClick={() => setAddEventModalOpen(true)}
                    className="p-2 bg-sea-green py-1 px-4 text-white uppercase font-normal rounded-md"
                >
                    Create Event
                </button>
            </div>
            <AddEventModal
                isOpen={addEventModalOpen}
                closeModal={() => setAddEventModalOpen(false)}
            />
        </div>
    );
};

export default EventsPage;
