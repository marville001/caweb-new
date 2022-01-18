import React from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import CalendarListing from "../components/CalendarListing";

const DailyReadings = () => {
  return (
    <div className="container  py-14">
      <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold">
        Daily Readings
      </h1>

      {/* Listing */}
      <CalendarListing daily />

      {/* Page switch */}
      <div className="flex justify-between items-center px-6 w-8/12 md:w-5/12 mx-auto">
            <FaChevronCircleLeft className=" text-gray-400 text-xl cursor-pointer" />
            <h2 className="text-xl font-medium">Page 1</h2>
            <FaChevronCircleRight className=" text-gray-800 text-xl cursor-pointer" />
        </div>
    </div>
  );
};

export default DailyReadings;
