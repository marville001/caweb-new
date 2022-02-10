import React, { useState } from "react";
import AddEventModal from "../components/EventsComponents/AddEventModal";
import EventCard from "../components/EventsComponents/EventCard";

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

            {/* Events Listing */}
            <div className="my-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((event, idx) => (
                    <EventCard key={idx} event={event} />
                ))}
            </div>

            <AddEventModal
                isOpen={addEventModalOpen}
                closeModal={() => setAddEventModalOpen(false)}
            />
        </div>
    );
};

export default EventsPage;
