import React from "react";
import { Link } from "react-router-dom";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
    return (
        <div
            style={{
                backgroundImage: "url(/assets/images/hero-image-4.jpg)",
                backgroundSize: "cover",
                backgroundPositionY: "bottom",
                minHeight: "70vh",
            }}
            className="flex flex-col justify-end"
        >
            <div className="flex flex-col justify-end items-end relative z-10 md:-top-14 bg-black bg-opacity-70">
                {/* Swipper carousel */}
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="w-[100%] md:px-10 lg:w-[90%] sm:mx-0 md:mx-10 lg:mx-24 bg-[rgba(0,0,0,.3)]"
                >
                    <SwiperSlide>
                        <div className="md:container min-h-[400px] p-4 sm:px-10 w-full bg-[#0b416c] md:bg-inherit md:h-[70vh] grid md:place-content-center ">
                            <h1 className="text-white font-semibold text-3xl md:text-5xl mb-2">
                                A Message For You
                            </h1>
                            <p className="text-slate-100 md:w-4/6 text-lg font-light my-4">
                                We are grateful that you have visited our
                                website and hope that you might choose to
                                encounter God with us in our celebrations of
                                sacred liturgies and in our ministries. Whether
                                you are visiting us for the first time,
                                returning to the practice of your Catholic faith
                                or looking to learn more about Dekut Catholic
                                Chaplaincy, please know that we are happy to
                                have you here.
                            </p>
                            <Link
                                to="/about"
                                className="bg-sea-green text-center block w-40 p-2 my-4 text-slate-100"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:container min-h-[400px] p-4 sm:px-10 w-full bg-[#0b416c] md:bg-inherit md:h-[70vh] grid md:place-content-center ">
                            <h1 className="text-white font-semibold text-3xl md:text-5xl mb-2">
                                Gifts of the Holy Spirit
                            </h1>
                            <div className="text-slate-100 md:w-4/6 text-lg font-light my-4 grid-cols-2 grid sm:grid-cols-3 gap-x-5 sm:min-w-[600px] pr-16">
                                <span className="mr-5 block">Wisdom</span>
                                <span className="mr-5 block">
                                    Understanding
                                </span>
                                <span className="mr-5 block">Counsel</span>
                                <span className="mr-5 block">Knowledge</span>
                                <span className="mr-5 block">Fortitude</span>
                                <span className="mr-5 block">Piety</span>
                                <span className="mr-5 block">Piety</span>
                                <span className="mr-5 block">
                                    Fear of the Lord
                                </span>
                            </div>
                            <Link
                                to="/about"
                                className="bg-sea-green text-center block w-40 p-2 my-4 self-start text-slate-100"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:container min-h-[400px] p-4 sm:px-10 w-full bg-[#0b416c] md:bg-inherit md:h-[70vh] grid md:place-content-center ">
                            <h1 className="text-white font-semibold text-3xl md:text-5xl mb-2">
                                Fruits of the Holy Spirit
                            </h1>
                            <div className="text-slate-100 md:w-4/6 text-lg font-light my-4 grid-cols-2 grid sm:grid-cols-3 gap-x-5 sm:min-w-[600px] pr-16">
                                <span className="mr-5 block">Charity</span>
                                <span className="mr-5 block">Joy</span>
                                <span className="mr-5 block">Peace</span>
                                <span className="mr-5 block">Patience</span>
                                <span className="mr-5 block">Kindness</span>
                                <span className="mr-5 block">Goodness</span>
                                <span className="mr-5 block">Generosity</span>
                                <span className="mr-5 block">Gentleness</span>
                                <span className="mr-5 block">Faithfulness</span>
                                <span className="mr-5 block">Modesty</span>
                                <span className="mr-5 block">Self Control</span>
                                <span className="mr-5 block">Chastity</span>
                            </div>
                            <Link
                                to="/about"
                                className="bg-sea-green text-center block w-40 p-2 my-4 self-start text-slate-100"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HeroSection;
