import React from "react";
import { Link } from "react-router-dom";

const CalendarListing = ({ events = [] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:mt-8">
            {events.map((event, i) => (
                <Link to="#event" className="relative bg-white min-h-[300px]">
                    <img src={event.image} alt="" className="w-full h-full" />
                    <div className="flex flex-col items-center absolute bottom-0 inset-x-0 bg-white">
                        <h3 className="text-lg my-2 text-center font-semibold">
                            {new Date(event.date).toDateString().toString()}
                        </h3>

                        <Link
                            to="#event"
                            className="text-sm sm:text-lg text-dodge-blue"
                        >
                            {event.title}
                        </Link>

                        <p className="mb-2 mt-2 font-normal">
                            {event.description?.substring(0, 30) + "..."}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CalendarListing;
