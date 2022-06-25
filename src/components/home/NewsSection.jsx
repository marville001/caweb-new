import React from "react";
import { FaBible, FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useBlogs } from "../../contexts/blogs.context";

const NewsSection = () => {
    const { blogs } = useBlogs();

    return (
        <div className="container py-0 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-2">
                {/* News Section */}
                <div className="bg-white shadow-xl md:row-start-1 md:col-start-4 md:col-span-2 border-t-[10px] rounded border-sea-green text-center capitalize p-5 md:ml-6 md:row-span-2">
                    <h2 className="text-3xl font-semibold text-slate-800">
                        Latest News
                    </h2>

                    <div className="divide-y">
                        {[...blogs?.slice(0, 4)]?.map((blog, i) => (
                            <div key={i} className="pb-6 pt-6">
                                <p className="text-lg mb-2">{blog?.title}</p>
                                <Link
                                    to={`/news/${blog?.slug}`}
                                    className="flex justify-center items-center text-dodge-blue font-semibold"
                                >
                                    Read More{" "}
                                    <FaChevronRight className="ml-2" />
                                </Link>
                            </div>
                        ))}

                        <Link
                            to={`/news/`}
                            className="pt-8 flex justify-center items-center text-dodge-blue font-semibold"
                        >
                            View More <FaChevronRight className="ml-2" />
                        </Link>
                    </div>
                </div>

                {/* Cards section */}
                <div className="flex flex-col sm:flex-row gap-5 my-5 md:mt-auto  md:col-span-3">
                    <a href="#s" className="flex-1 shadow-xl bg-white p-1">
                        <h2 className="text-xl p-3 mb-4 text-slate-800 font-normal uppercase">
                            Our Spotlight
                        </h2>
                        <div className="w-full h-48">
                            <img
                                src="https://www.usccb.org/sites/default/files/styles/card_1/public/2021-10/LOGO-INGLESE-PNG2-logo-only.png.jpg?itok=gtkBT26U"
                                alt="334434"
                                className="object-fill w-full h-full"
                            />
                        </div>
                        <div className="p-3 bg-white text-xl">
                            <h2 className="text-slate-800 font-semibold">
                                Synod on Synodality
                            </h2>
                        </div>
                    </a>
                    <a
                        href="#s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 shadow-xl bg-white p-1"
                    >
                        <h2 className="text-xl p-3 mb-4 text-slate-800 font-normal uppercase">
                            Daily Reflection
                        </h2>
                        <div className="w-full h-48">
                            <img
                                src="https://www.usccb.org/sites/default/files/styles/card_1/public/video_thumbnails/5CZqnG7yYec.jpg?h=c673cd1c&itok=7FW-JuUK"
                                alt="334434"
                                className="object-fill w-full h-full"
                            />
                        </div>
                        <div className="p-5 bg-white text-xl">
                            <h2 className="text-slate-800 font-semibold">
                                Reflection 20 2022 01 02 Reflection 20
                            </h2>
                        </div>
                    </a>
                </div>

                {/* Daily Readings */}
                <div className="md:row-start-2 md:col-start-1 md:col-span-3 py-6">
                    <h2 className="text-slate-800 font-semibold flex items-center text-2xl">
                        <FaCalendarAlt className="inline mr-4" /> Daily Readings
                    </h2>
                    <div className="flex flex-col gap-5 pt-5">
                        <div className="flex shadow-2xl bg-white py-4 px-2 divide-x divide-slate-300">
                            <div className="flex-shrink pr-8  flex items-center justify-center">
                                <FaBible />
                            </div>
                            <div className="flex-1 text-center">
                                The Epiphany of the Lord:{" "}
                                <span className="text-sm ml-4 text-slate-600">
                                    Lectionary: 20
                                </span>
                            </div>
                            <a
                                href="#ddddd"
                                className="flex-shrink pl-8 text-dodge-blue"
                            >
                                Read More
                            </a>
                        </div>
                        <div className="flex shadow-2xl bg-white py-4 px-2 divide-x divide-slate-300">
                            <div className="flex-shrink pr-8  flex items-center justify-center">
                                <FaBible />
                            </div>
                            <div className="flex-1 text-center ">
                                2022 - 01 - 02 USCCB Daily Mass Readings:
                            </div>
                            <a
                                href="#listen"
                                className="flex-shrink px-4 pl-8 text-dodge-blue"
                            >
                                Listen
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
