import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarListing from "../components/CalendarListing";
import { fetchEventsAction } from "../redux/actions/events";

const Events = () => {
    const { events } = useSelector((state) => state.eventsState);

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
                {/* Events listing */}
                <CalendarListing events={events} />

                <div className="py-6 flex justify-center">
                    <button className="bg-sea-green text-white py-3  px-8 text-lg font-medium -tracking-tighter hover:opacity-90">
                        Load More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Events;
