import React, { useState } from "react";

import { FaMapMarkerAlt, FaTrash, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchEventsAction } from "../../../redux/actions/events";
import { _delete } from "../../../redux/actions/http";
import parseError from "../../../utils/parseError";
import ConfirmDeleteModal from "../common/ConfirmDeleteModal";

const EventCard = ({ event }) => {
    const [deleteEventModalOpen, setDeleteEventModalOpen] = useState(false);

    const [deleting, setDeleting] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteEvent = async () => {
        try {
            setDeleting(true);

            await _delete(`events/${event._id}`, "admin");
            dispatch(fetchEventsAction("admin"));

            setDeleting(false);
            toast.success("Event Deleted successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setDeleteEventModalOpen(false);
        } catch (error) {
            setDeleting(false);
            toast.error(parseError(error), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <div className="bg-white shadow overflow-hidden rounded-md self-start pb-2">
            <Link to={`/admin/events/${event?._id}`}>
                <img
                    src={event?.image}
                    alt=""
                    className="w-full h-48 object-cover"
                />
            </Link>

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

                <div className="flex items-center justify-between">
                    <span className="font-medium rounded mt-2 block">
                        {new Date(event?.date).toDateString()}
                    </span>

                    <div className="flex gap-2 items-center">
                        <Link to={`/admin/events/${event?._id}`}>
                            <FaEdit
                                className="text-dodge-blue hover:text-emerald-900 cursor-pointer block mt-2 mr-2"
                                onClick={() => setDeleteEventModalOpen(true)}
                            />
                        </Link>

                        <FaTrash
                            className="text-red-300 hover:text-red-500 cursor-pointer block mt-2 mr-2"
                            onClick={() => setDeleteEventModalOpen(true)}
                        />
                    </div>
                </div>
            </div>

            <ConfirmDeleteModal
                isOpen={deleteEventModalOpen}
                closeModal={() => {
                    setDeleteEventModalOpen(false);
                }}
                loading={deleting}
                message={`Please Confirm Deleting the Event {${event?.title}}. This will erase all data about the event`}
                actionMethod={handleDeleteEvent}
            />
        </div>
    );
};

export default EventCard;
