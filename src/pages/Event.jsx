import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CalendarListing from "../components/CalendarListing";
import { fetchEventsAction } from "../redux/actions/events";
import { get } from "../redux/actions/http";

const Event = () => {
    const [loading, setLoading] = useState(false);
    const [event, setEvent] = useState({});

    const { key } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        const loadEvent = async () => {
            try {
                setLoading(true);
                const data = await get(`events/${key}`);
                setLoading(false);

                setEvent(data.event);
            } catch (error) {
                setLoading(false);
                console.log({ error });
            }
        };
        loadEvent();
    }, [key]);

    return (
        <div className="container  py-14">
            {loading ? (
                <div className="flex my-10 justify-center text-2xl animate-spin">
                    <FaSpinner />
                </div>
            ) : (
                <div className="max-w-4xl bg-white mx-auto py-10">
                    <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold">
                        {event?.title}
                    </h1>
                </div>
            )}
        </div>
    );
};

export default Event;
