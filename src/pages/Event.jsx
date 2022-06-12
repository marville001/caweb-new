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
        <div className="container max-w-4xl mx-auto py-14">
            {loading ? (
                <div className="flex my-10 justify-center text-2xl animate-spin">
                    <FaSpinner />
                </div>
            ) : (
                <div className="px-10 w-full sm:w-[500px] bg-white mx-auto py-10">
                    <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold">
                        {event?.title}
                    </h1>

                    <h3 className="text-sm text-center my-2 font-semibold">
                        {new Date(event.date).toDateString().toString()}
                    </h3>

                    <div className="flex jufstify-center my-6">
                        <img
                            src={event?.image}
                            alt={event?.title}
                            className="w-full sm:h-60 object-cover"
                        />
                    </div>

                    <p className="text-center">{event?.description}</p>
                </div>
            )}
        </div>
    );
};

export default Event;
