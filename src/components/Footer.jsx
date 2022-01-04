import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

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

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl text-blue-300">Prayer & Worship</div>
            <div className="flex flex-col">
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Daily Readings Calendar
              </Link>

              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Prayers
              </Link>
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Our Mass
              </Link>
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                The Bible
              </Link>
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Our Books Store
              </Link>
            </div>
          </div>

          <div>
            <div className="text-2xl text-blue-300">Get Involved to Act Now</div>
            <div className="flex flex-col">
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Take Action
              </Link>

              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Help Now
              </Link>
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Meetings & Events
              </Link>
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Pray
              </Link>
            </div>
          </div>

          <div>
            <div className="text-2xl text-blue-300">Quick Links</div>
            <div className="flex flex-col">
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Calendars
              </Link>

              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Social Media
              </Link>
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                DEKUTCC News Service
              </Link>
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                About Us
              </Link>
              <Link
                className="text-base text-slate-100 font-light"
                to="/readings/calendar"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Copyrigght and social media */}
        <div className="flex items-center my-5 justify-between flex-col sm:flex-row gap-5">
          <p className="text-slate-300 capitalize">
            @{new Date().getFullYear()} DEKUT CATHOLIC ACTION
          </p>
          <div className="flex items-center gap-2">
            <a
              href="#youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-300 p-2 rounded-full cursor-pointer"
            >
              <FaFacebookF className="text-lg text-white rounded-full" />
            </a>
            <a
              href="#youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-300 p-2 rounded-full cursor-pointer"
            >
              <FaYoutube className="text-lg text-white rounded-full" />
            </a>
            <a
              href="#youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-300 p-2 rounded-full cursor-pointer"
            >
              <FaTwitter className="text-lg text-white rounded-full" />
            </a>
            <a
              href="#youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-300 p-2 rounded-full cursor-pointer"
            >
              <FaInstagram className="text-lg text-white rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
