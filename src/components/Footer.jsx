import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import axios from "axios";
const Footer = () => {
    const [email, setEmail] = useState(" ");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const baseUrl = process.env.REACT_APP_API_URL;

        try {
            const { data } = await axios.post(
                `${baseUrl}users/email/subscribe`,
                {
                    email,
                }
            );

            setSuccess(data.message);
            setEmail("");
        } catch (error) {
            setError(error.response.data.message);
            setTimeout(() => {
                setError("");
            }, 3000);
        }
    };

    return (
        <div className="bg-dodge-blue min-h-[30vh] py-4">
            <div className="container">
                <div className="flex flex-col items-center pb-6">
                    <div className="flex flex-col content-center justify-center">
                        <div className="flex flex-col my-6 content-center justify-center">
                            <h2 className="text-3xl uppercase text-center text-white font-bold">
                                Enter your email
                            </h2>
                            <p className="text-lg my-5 text-white mx-auto capitalize text-center">
                                Subscribe to our newsletter to receive updates
                            </p>
                            {error && (
                                <p className="bg-red-100 p-2 rounded text-center text-red-600 my-4">
                                    {error}
                                </p>
                            )}

                            {success ? (
                                <p className="bg-green-100 p-2 rounded text-center text-green-600 text-lg my-4">
                                    {success}
                                </p>
                            ) : (
                                <div className="flex flex-row content-center justify-center ">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="flex flex-col md:flex-row content-center justify-center w-full p-2 md:p-0 md:w-[500px]"
                                    >
                                        <input
                                            className="text-sm md:text-md px-6 py-2 bg-white sm:text-sm w-full flex-1 outline-none md:!rounded-r-none"
                                            type="email"
                                            value={email}
                                            placeholder="Enter your Email"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            required
                                        />
                                        <button className="bg-sea-green rounded-md md:rounded-none md:rounded-r-md text-white  px-8 py-2 md:my-0 my-2 text-md font-medium -tracking-tighter hover:opacity-90 uppercase small:font-sm ">
                                            subscribe
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>

                        <h2 className="text-3xl text-white mx-auto mt-6 mb-2">
                            Dive into God's Word
                        </h2>

                        <div className="flex flex-col content-center justify-center sm:flex-row gap-2 mt-4">
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
                </div>
                <hr className="border-slate-500" />

                <div className="flex py-8 flex-col md:flex-row">
                    <div className="flex-[3]">
                        <h3 className="text-blue-300 text-2xl mb-4">
                            About DEKUTCC
                        </h3>
                        <p className="text-white text-md font-light">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Consequatur, dolores ex eaque, suscipit qui
                            cupiditate neque
                        </p>
                    </div>
                    <div className="flex-[2] mt-4 md:p-4">
                        <Link
                            to="/about"
                            className="bg-sea-green rounded-md text-white py-3  px-8 text-md font-medium -tracking-tighter hover:opacity-90 uppercase"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div>
                        <div className="text-2xl text-blue-300">
                            Prayer & Worship
                        </div>
                        <div className="flex flex-col my-3 gap-1">
                            <Link
                                className="text-slate-100 font-light text-sm"
                                to="/readings/calendar"
                            >
                                Daily Readings Calendar
                            </Link>

                            <Link
                                className="text-slate-100 font-light text-sm"
                                to="/prayers"
                            >
                                Prayers
                            </Link>
                            <Link
                                className="text-slate-100 font-light text-sm"
                                to="/mass"
                            >
                                Our Mass
                            </Link>
                            <Link
                                className="text-slate-100 font-light text-sm"
                                to="/bible"
                            >
                                The Bible
                            </Link>
                            <Link
                                className="text-slate-100 font-light text-sm"
                                to="/store"
                            >
                                Our Books Store
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="text-2xl text-blue-300">
                            Get Involved to Act Now
                        </div>
                        <div className="flex flex-col my-3 gap-1">
                            <Link
                                className="text-slate-100 font-light text-sm"
                                to="/take-action"
                            >
                                Take Action
                            </Link>

                            <Link
                                className="text-slate-100 font-light text-sm"
                                to="/help"
                            >
                                Help Now
                            </Link>
                            <Link
                                className="text-slate-100 font-light text-sm"
                                to="/events"
                            >
                                Meetings & Events
                            </Link>
                            <Link
                                className="text-slate-100 font-light text-sm"
                                to="/pray"
                            >
                                Pray
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="text-2xl text-blue-300">
                            Quick Links
                        </div>
                        <div className="flex flex-col my-2 gap-1">
                            <Link
                                className="text-sm text-slate-100 font-light"
                                to="/events"
                            >
                                Calendars
                            </Link>

                            <Link
                                className="text-sm text-slate-100 font-light"
                                to="/get-connected"
                            >
                                Social Media
                            </Link>
                            <Link
                                className="text-sm text-slate-100 font-light"
                                to="/news"
                            >
                                DEKUTCC News Service
                            </Link>
                            <Link
                                className="text-sm text-slate-100 font-light"
                                to="/about"
                            >
                                About Us
                            </Link>
                            <Link
                                className="text-sm text-slate-100 font-light"
                                to="/contact"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyrigght and social media */}
                <div className="flex items-center my-5 justify-between flex-col sm:flex-row gap-5">
                    <p className="text-slate-300 capitalize">
                        @{new Date().getFullYear()} DEKUT Catholic chaplaincy
                    </p>
                    <div className="flex items-center gap-2">
                        <a
                            href="#youtube"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-300 p-2 rounded-full cursor-pointer hover:bg-slate-300 group"
                        >
                            <FaFacebookF className="text-lg group-hover:text-blue-400 text-white rounded-full" />
                        </a>
                        <a
                            href="#youtube"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-300 p-2 rounded-full cursor-pointer hover:bg-slate-300 group"
                        >
                            <FaYoutube className="text-lg group-hover:text-blue-400 text-white rounded-full" />
                        </a>
                        <a
                            href="#youtube"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-300 p-2 rounded-full cursor-pointer hover:bg-slate-300 group"
                        >
                            <FaTwitter className="text-lg group-hover:text-blue-400 text-white rounded-full" />
                        </a>
                        <a
                            href="#youtube"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-300 p-2 rounded-full cursor-pointer hover:bg-slate-300 group"
                        >
                            <FaInstagram className="text-lg group-hover:text-blue-400 text-white rounded-full" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
