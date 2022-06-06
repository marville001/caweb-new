import React from "react";

import { FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({ event }) => {
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
                <div className="font-medium rounded mt-2">
                    {new Date(event?.date).toUTCString()}
                </div>
            </div>
        </div>
    );
};

export default EventCard;
