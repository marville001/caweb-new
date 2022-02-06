import React from "react";

const CalendarListing = ({ daily }) => {
  return (
    <div className="my-10 divide-y-2 divide-gray-200ra">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="flex flex-col md:flex-row md:divide-x-2 divide-gray-300 py-4 hover:bg-white cursor-pointer shadow-all px-4">
          <div className="md:pr-6 min-w-[150px]">
            <h3 className="text-slate-800 text-center font-bold text-2xl md:text-3xl">
              {daily ? 20 + i : 20 + i + "-" + (22 + i)}
            </h3>
            <p className="text-xs md:text-sm  md:mt-2 font-medium text-center">
              JAN 2022
            </p>
          </div>
          <div className="md:pl-6 flex justify-center my-5 items-center">
            <p className="md:text-xl text-dodge-blue font-bold text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarListing;
