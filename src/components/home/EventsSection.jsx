import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EventsSection = () => {
    const { events } = useSelector((state) => state.eventsState);

    return (
        <div className="container my-8 md:p-8 lg:p-10">
            <h2 className="text-3xl font-semibold text-dodge-blue mb-4">
                Upcoming Events
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:mt-8">
                {events?.map((event, i) => (
                    <Link
                        to="#event"
                        key={i}
                        className="relative bg-white min-h-[300px]"
                    >
                        <img
                            src={event.image}
                            alt=""
                            className="w-full h-full"
                        />
                        <div className=" absolute bottom-0 inset-x-0 bg-white">
                            <h3 className="text-sm my-2 font-semibold">
                                {new Date(event.date).toDateString().toString()}
                            </h3>

                            <span className="text-sm sm:text-lg text-dodge-blue">
                                {event.title}
                            </span>

                            <p className="mb-2 mt-2 font-normal">
                                {event.description?.substring(0, 30) + "..."}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="py-6 flex justify-center">
                <Link
                    to="/events"
                    className="bg-sea-green text-white py-3  px-8 text-lg font-medium -tracking-tighter hover:opacity-90"
                >
                    View More
                </Link>
            </div>
        </div>
    );
};

export default EventsSection;
