import React from "react";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import CalendarListing from "../components/CalendarListing";

const Events = () => {
  return (
    <div className="container  py-14">
      <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold">
        DEKUTCC Calendar
      </h1>
      <div className="md:px-16 py-12 bg-slate-50 my-8">
        {/* Header */}
        {/* <div className="flex justify-between">
          <div className="flex flex-col md:flex-row gap-2">
            <Link
              className="border-slate-800 border-2 p-2 px-4 uppercase text-slate-800 hover:bg-slate-800 hover:text-white font-medium text-md"
              to="/daily-readings"
            >
              Daily readings
            </Link>
            <Link
              className="md:ml-5 border-slate-800 border-2 p-2 px-4 uppercase text-slate-800 hover:bg-slate-800 hover:text-white font-medium text-md"
              to="/events/past"
            >
              PAST events
            </Link>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center cursor-pointer">
              Date <FaChevronDown className="mt-[2px] ml-2" />{" "}
            </div>
          </div>
        </div> */}

        {/* Events listing */}
        <CalendarListing events={[1,2,3,4]} />

        {/* Page switch */}
        <div className="flex justify-between items-center px-6 w-10/12 md:w-5/12 mx-auto">
          <span className="flex items-center cursor-pointer">
            <FaChevronCircleLeft className="mt-1 mr-2 text-gray-400 text-xl" />
            <span className="hidden sm:block">previous</span>
          </span>
          <h2 className="text-xl font-medium">Page 1</h2>
          <span className="flex items-center cursor-pointer">
            <span className="hidden sm:block">next</span>
            <FaChevronCircleRight className="mt-1 ml-2 text-gray-800 text-xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Events;
