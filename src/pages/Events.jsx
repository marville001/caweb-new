import React from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft, FaChevronCircleRight, FaChevronDown } from "react-icons/fa";
const Events = () => {
  return (
    <div className="container  py-14">
      <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold">
        DEKUTCC Calendar
      </h1>
      <div className="md:px-16 py-12 bg-slate-50 my-8">
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row gap-2">
            <Link
              className="border-slate-800 border-2 p-2 px-4 uppercase text-slate-800 hover:bg-slate-800 hover:text-white font-medium text-md"
              to="/daily-readings"
            >
              Daily readings
            </Link>
            <Link
              className="md:ml-5 border-slate-800 border-2 p-2 px-4 uppercase text-slate-800 hover:bg-slate-800 hover:text-white font-medium text-md"
              to="events/past"
            >
              Daily readings
            </Link>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center cursor-pointer">
              Date <FaChevronDown className="mt-[2px] ml-2" />{" "}
            </div>
          </div>
        </div>

        {/* Events listing */}
        <div className="my-10 divide-y-2 divide-gray-200ra">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className="flex flex-col md:flex-row md:divide-x-2 divide-gray-300 py-4 hover:bg-white cursor-pointer hover:shadow-lg px-4">
              <div className="md:pr-6 min-w-[150px]">
                <h3 className="text-slate-800 text-center font-bold text-2xl md:text-3xl">
                  {20 + i}-{22 + i}
                </h3>
                <p className="text-xs md:text-sm  md:mt-2 font-medium text-center">JAN 2022</p>
              </div>
              <div className="md:pl-6 flex justify-center my-5 items-center">
                <p className="md:text-xl text-dodge-blue font-bold text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Page switch */}
        <div className="flex justify-between items-center px-6 w-5/12 mx-auto">
            <FaChevronCircleLeft className=" text-gray-400 text-xl cursor-pointer" />
            <h2 className="text-xl font-medium">Page 1</h2>
            <FaChevronCircleRight className=" text-gray-800 text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Events;
