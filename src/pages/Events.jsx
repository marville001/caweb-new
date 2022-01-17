import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="container  py-14">
      <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold">
        DEKUTCC Calendar
      </h1>
      <div className="px-16 py-12 bg-white my-8">
        <div className="flex justify-between">
          <div className="">
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
        </div>
      </div>
    </div>
  );
};

export default Events;
