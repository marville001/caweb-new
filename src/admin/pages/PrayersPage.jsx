import React from "react";
import { Link } from "react-router-dom";
const PrayersPage = () => {
  return (
    <div className="rounded-md  p-4">
      <div className="flex justify-between">
        <h4 className="text-2xl text-dodge-blue font-bold">Prayers</h4>
        <Link
          to="/admin/prayers/new"
          className="p-2 bg-sea-green py-1 px-4 text-white uppercase font-normal rounded-md"
        >
          Add Prayer
        </Link>
      </div>

      <div className="my-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((prayer) => (
          <div key={prayer} className="bg-white shadow py-2 px-6 rounded-md">
            <h2 className="text-md my-2 font-medium">Prayer to St Michael</h2>
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              aliquid, a consequuntur ...
            </p>
            <div className="flex justify-between">
              <Link to="/admin/prayers/edit/id" className="bg-dodge-blue px-2 rounded text-white text-xs py-1">Edit</Link >
              <button className="bg-red-300 px-2 rounded text-white text-xs py-1">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayersPage;
