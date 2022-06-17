import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSccsAction } from "../../redux/actions/admin/sccs";
import { fetchEventsAction } from "../../redux/actions/events";
import EventCard from "../components/EventsComponents/EventCard";

const EventsPage = () => {
    const { events } = useSelector((state) => state.eventsState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSccsAction());
        dispatch(fetchEventsAction("admin"));
    }, [dispatch]);

    return (
        <div className="p-4">
            <div className="flex justify-between">
                <h4 className="text-2xl text-dodge-blue font-bold">Events</h4>
                <Link
                    to="/admin/events/new"
                    className="p-2 bg-steelblue py-1 px-4 text-white uppercase font-normal rounded-md"
                >
                    Create Event
                </Link>
            </div>

            {/* Events Listing */}
            <div className="my-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {events?.map((event, idx) => (
                    <EventCard key={idx} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
