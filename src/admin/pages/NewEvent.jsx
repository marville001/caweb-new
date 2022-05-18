import React, { useState } from "react";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageUpload from "../components/common/ImageUpload";

const NewEvent = () => {
    const [imageUrl, setImageUrl] = useState("");
    
    return (
        <div className="px-2 sm:px-0">
            <Link
                to="/admin/sccs"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-2xl mx-auto _shadow rounded-md border-2">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            New Event
                        </h2>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />

                    <div className="my-10 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="">Event Title</label>
                            <input type="text" placeholder="Enter event title here" className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="">Event Date</label>
                            <input type="datetime-local" className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="">Event Location</label>
                            <input type="text" placeholder="Enter event location here" className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="">Group</label>
                            <input type="text" placeholder="Enter group here" className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="">Description</label>
                            <textarea type="text" placeholder="Describe the event" rows={5} className="focus:!sring-0 focus:!outline-none focus:!bottom-0 !rounded" ></textarea>
                        </div>

                        <div className="flex flex-col gap-2">
                            <ImageUpload setUrl={setImageUrl} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewEvent;
