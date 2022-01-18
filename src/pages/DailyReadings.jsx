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
  );
};

export default DailyReadings;
