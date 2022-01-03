import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dodge-blue min-h-[30vh] py-4">
      <div className="container">
        <div className="flex flex-col items-center pb-6">
          <h2 className="text-3xl text-white my-4">Dive into God's Word</h2>
          <div className="flex gap-2 mt-4">
            <button className="rounded-full text-sm text-white hover:bg-white hover:text-dodge-blue px-4 py-2 border border-white">
              Daily Readings
            </button>
            <button className="rounded-full text-sm text-white hover:bg-white hover:text-dodge-blue px-4 py-2 border border-white">
              Watch Our Videos
            </button>
            <button className="rounded-full text-sm text-white hover:bg-white hover:text-dodge-blue px-4 py-2 border border-white">
              Daily Players
            </button>
          </div>
        </div>

        <hr className="border-slate-500" />

        <div className="flex py-8 flex-col md:flex-row">
          <div className="flex-[3]">
            <h3 className="text-blue-300 text-2xl mb-4">About DEKUTCC</h3>
            <p className="text-white text-lg font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur, dolores ex eaque, suscipit qui cupiditate neque
            </p>
          </div>
          <div className="flex-[2] mt-4 md:p-4">
            <Link
              to="/about"
              className="bg-sea-green text-white py-3  px-8 text-lg font-medium -tracking-tighter hover:opacity-90 uppercase"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
