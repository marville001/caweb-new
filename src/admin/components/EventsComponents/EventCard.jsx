import React from "react";

const EventCard = () => {
    return (
        <div className="bg-white shadow overflow-hidden rounded-md">
            <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="w-full h-48 object-cover"
            />

            <div className="p-2">
                <h4>Event Title</h4>
                <p className="my-3 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, corrupti molestiae nihil corporis in officia
                    deserunt cupiditate earum possimus consectetur?
                </p>
                <div className="bg-slate-200 p-2 py-1 text-dodge-blue font-medium rounded">Date : 22nd Feb, 2022</div>
            </div>
        </div>
    );
};

export default EventCard;
