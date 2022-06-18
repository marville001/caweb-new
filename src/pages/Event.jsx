import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarListing from "../components/CalendarListing";
import { fetchEventsAction } from "../redux/actions/events";

const Event = () => {
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
        </div>
    );
};

export default Event;
