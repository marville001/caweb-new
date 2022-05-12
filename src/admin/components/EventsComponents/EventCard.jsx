import React from "react";

const EventCard = ({ event }) => {
    return (
        <div className="bg-white shadow overflow-hidden rounded-md">
            <img
                src={process.env.REACT_APP_UPLOADS_URL + event?.image}
                alt=""
                className="w-full h-48 object-cover"
            />

            <div className="p-2">
                <h4 className="text-lg font-bold opacity-80">{event?.title}</h4>
                <p className="my-3 text-sm">{event?.description}</p>
                <div className="bg-slate-200 p-2 py-1 text-dodge-blue font-medium rounded">
                    {new Date(event?.date).toDateString()}
                </div>
            </div>
        </div>
    );
};

export default EventCard;
