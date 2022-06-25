import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import CalendarListing from "../components/CalendarListing";
import { fetchEventsAction } from "../redux/actions/events";

const Events = () => {
    const { events, isLoadingEvents } = useSelector(
        (state) => state.eventsState
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEventsAction());
    }, [dispatch]);

    return (
        <div className="container  py-14">
            <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold">
                Our Events
            </h1>
            <div className="md:px-16 py-12 bg-slate-50_">
                {isLoadingEvents ? (
                    <div className="flex py-6 justify-center">
                        <FaSpinner className="animate-spin text-3xl" />
                    </div>
                ) : events?.length > 0 ? (
                    <CalendarListing events={events} />
                ) : (
                    <div className="flex py-6 justify-center text-3xl ">
                        <h3 className="font-bold uppercase opacity-70 tracking-wider">
                            No Events yet
                        </h3>
                    </div>
                )}

                {events.length > 10 && (
                    <div className="py-6 hidden _flex justify-center">
                        <button className="bg-sea-green text-white py-3  px-8 text-lg font-medium -tracking-tighter hover:opacity-90">
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
