import React from "react";

const CalendarListing = ({ events=[] }) => {
    return (
        <div className="my-10 divide-y-2 divide-gray-200ra">
            {events.map((event, i) => (
                <div
                    key={event._id}
                    className="flex flex-col md:flex-row md:divide-x-2 divide-gray-300 py-4 hover:bg-white cursor-pointer shadow-all px-4"
                >
                    <div className="md:pr-6 min-w-[150px]">
                        <h3 className="text-slate-800 text-center font-bold text-2xl md:text-3xl">
                            {new Date(event.date).toDateString().toString().substring(8, 10)}
                            
                        </h3>
                        <p className="text-xs md:text-sm  md:mt-2 font-medium text-center">
                          {
                            new Date(event.date).toDateString().toString().substring(0, 4) +
                            new Date(event.date).toDateString().toString().substring(4, 7) + " " +
                            new Date(event.date).getFullYear() 
                          }
                        </p>
                    </div>
                    <div className="md:pl-6 my-5">
                        <p className="md:text-xl text-dodge-blue font-bold text-center">
                            {event.title}
                        </p>
                        <p className="mt-2 text-center">
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Sint debitis,
                            assumenda rem harum corrupti laudantium
                            exercitationem nulla numquam nam molestiae.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CalendarListing;
