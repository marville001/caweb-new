import React, { useEffect } from "react";
import { FaChevronRight, FaCalendarAlt, FaBible } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "react-cool-img";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryImages } from "../redux/actions/galleryAction";
import { fetchEventsAction } from "../redux/actions/events";

const Home = () => {
    const { images } = useSelector((state) => state.galleryState);
    const { events } = useSelector((state) => state.eventsState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEventsAction());
        dispatch(getGalleryImages({ page: 1, pageSize: 20 }));
    }, [dispatch]);

    return (
        <div className="home py-0">
            {/* Hero Section */}
            <div
                className="flex flex-col justify-end items-end relative z-10 md:-top-14"
                style={{
                    backgroundImage: "url(/assets/images/hero-image-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                    minHeight: "70vh",
                    backgroundColor: "rgba(0,0,0,1)",
                }}
            >
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
                    className="w-[100%] md:px-10 lg:w-[90%] h-full sm:mx-0 md:mx-10 lg:mx-24 bg-[rgba(0,0,0,.3)]"
                >
                    <SwiperSlide>
                        <div className="md:container p-4 px-10 bg-[#0b416c] md:bg-inherit md:h-[70vh] grid md:place-content-center ">
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
                        <div className="md:container p-4 px-10 bg-[#0b416c] md:bg-inherit md:h-[70vh] grid md:place-content-center ">
                            <h1 className="text-white font-semibold text-3xl md:text-5xl mb-2">
                                Christmas
                            </h1>
                            <p className="text-slate-100 md:w-4/6 text-lg font-light my-4">
                                Christmas is one of the most important days of
                                the Church year, second only to Easter itself.
                                It is the feast of the incarnation, the feast of
                                God becoming flesh (the Latin "in carne" means
                                "enfleshment").
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
                        <div className="md:container p-4 px-10 bg-[#0b416c] md:bg-inherit md:h-[70vh] grid md:place-content-center ">
                            <h1 className="text-white font-semibold text-3xl md:text-5xl mb-2">
                                Christmas
                            </h1>
                            <p className="text-slate-100 md:w-4/6 text-lg font-light my-4">
                                Christmas is one of the most important days of
                                the Church year, second only to Easter itself.
                                It is the feast of the incarnation, the feast of
                                God becoming flesh (the Latin "in carne" means
                                "enfleshment").
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
                        <div className="md:container p-4 px-10 bg-[#0b416c] md:bg-inherit md:h-[70vh] grid md:place-content-center ">
                            <h1 className="text-white font-semibold text-3xl md:text-5xl mb-2">
                                Christmas
                            </h1>
                            <p className="text-slate-100 md:w-4/6 text-lg font-light my-4">
                                Christmas is one of the most important days of
                                the Church year, second only to Easter itself.
                                It is the feast of the incarnation, the feast of
                                God becoming flesh (the Latin "in carne" means
                                "enfleshment").
                            </p>
                            <Link
                                to="/about"
                                className="bg-sea-green text-center block w-40 p-2 my-4 text-slate-100"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="bg-white min-h-[40vh] py-8 md:py-12">
                <div className="mx-auto flex flex-col md:flex-row p-4 sm:p-10 max-w-7xl">
                    <img
                        src="https://d35r3vzpjv6bi5.cloudfront.net/26554/pictures/2020/9/Rectangle%2022.jpg?t=1600197744000"
                        alt=""
                        className="rounded-xl max-w-lg h-56 lg:h-auto object-cover"
                    />
                    <div className=" mt-8 md:mt-0 md:px-12">
                        <h3 className="text-orange-600 font-bold tracking-widest">
                            NEW TO OUR CHAPLAIN?
                        </h3>

                        <h1 className="text-dodge-blue uppercase font-bold text-xl mt-6 tracking-widest">
                            About DEKUTCC
                        </h1>
                        <div className="bg-orange-600 h-1 w-16 mt-3"></div>
                        <p className="my-16 text-lg opacity-90">
                            Welcome to the website for Dedan Kimathi University
                            of Technology. Sister Irene Stephani Catholic
                            Chaplaincy. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Doloribus fuga exercitationem sunt
                            in eum, perferendis maiores aperiam quas alias
                            explicabo harum. Est cumque earum dignissimos ipsa
                            quaerat doloribus ullam officia....
                        </p>
                        <Link
                            to="/about"
                            className="bg-dodge-blue text-white uppercase py-2 px-12 rounded-full "
                        >
                            LEarn more
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="min-h-[600px]"
                style={{
                    backgroundImage: "url(/assets/images/banner.png)",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                }}
            >
                <h2 className="text-3xl text-white text-center py-10">
                    Ordinary Sunday Mass
                </h2>
                <div className="container flex justify-center flex-col md:flex-row my-10 gap-5">
                    <div className="flex-2 flex justify-center">
                        <iframe
                            className="w-full h-[250px] sm:h-[350px] md:w-[400px] lg:w-[600px] lg:h-[400px]"
                            src="https://www.youtube.com/embed/ioMv8_pMM_o"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="flex-2 flex flex-col justify-center md:justify-start">
                        <h3 className="text-2xl text-white max-w-lg text-center md:text-left">
                            To view all our live stream, please visit our
                            youtube channel.
                        </h3>

                        <div className="flex justify-center md:justify-start my-8">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.youtube.com/channel/UCN8LML2jye7oj6w-bhcGLAg"
                                className="bg-sea-green py-2 px-8 inline-block text-white uppercase tracking-wider"
                            >
                                View Our Channel
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white min-h-[40vh] py-8 md:py-12">
                <div className="mx-auto flex flex-col md:flex-row p-4 sm:p-10 max-w-6xl">
                    <img
                        src="https://d35r3vzpjv6bi5.cloudfront.net/26337/pictures/2020/8/archdiocese-samples-003%20red.jpg?t=1597432008000"
                        alt=""
                        className="rounded-xl max-w-lg h-56 lg:h-auto object-cover"
                    />
                    <div className=" mt-8 md:mt-0 md:px-12">
                        <h3 className="text-orange-600 font-bold tracking-widest">
                            NEED ASSISTANCE?
                        </h3>

                        <h1 className="text-dodge-blue uppercase font-bold text-xl mt-6 tracking-widest">
                            Contact us
                        </h1>
                        <div className="bg-orange-600 h-1 w-16 mt-3"></div>
                        <p className="my-16 text-lg opacity-90">
                            Not sure where to begin? Click below to get in
                            touch. A member of the DEKUTCC Commitee will reach
                            out to personally assist you.
                        </p>
                        <Link
                            to="/contact-us"
                            className="bg-dodge-blue text-white uppercase py-2 px-8 rounded-full "
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="container py-0 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-2">
                    {/* News Section */}
                    <div className="bg-white shadow-xl md:row-start-1 md:col-start-4 md:col-span-2 border-t-[10px] rounded border-sea-green text-center capitalize p-5 md:ml-6 md:row-span-2">
                        <h2 className="text-3xl font-semibold text-slate-800">
                            Latest News
                        </h2>

                        <div className="divide-y">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="pb-6 pt-6">
                                    <p className="text-lg mb-2">
                                        U.S. Bishops’ Migration Chairman
                                        Addresses Future of Immigration Reform
                                    </p>
                                    <a
                                        href="#rr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex justify-center items-center text-dodge-blue font-semibold"
                                    >
                                        Read More{" "}
                                        <FaChevronRight className="ml-2" />
                                    </a>
                                </div>
                            ))}

                            <a
                                href="#rr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pt-8 flex justify-center items-center text-dodge-blue font-semibold"
                            >
                                View More <FaChevronRight className="ml-2" />
                            </a>
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
                            <FaCalendarAlt className="inline mr-4" /> Daily
                            Readings
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

            {/* Watch mass */}
            <div className="bg-white mt-4 text-center">
                <div className="container py-12 ">
                    <h2 className="text-2xl font-semibold text-dodge-blue">
                        Missed our Service? Catch up here <br /> or watch us
                        live.
                    </h2>
                    <p className="text-center my-4 font-medium">
                        Did you end up missing our service? No worries, you can
                        watch and or listen to our live service, along with many
                        of our other messages on our media page.
                    </p>
                    <p className="text-center font-medium">
                        We hope that you enjoy our latest message and many other
                        messages from us.
                    </p>
                    <a
                        href="#watch"
                        className="uppercase py-2 px-8 text-lg bg-sea-green inline-block my-6 text-white"
                    >
                        Watch now
                    </a>
                </div>
            </div>

            {/* <div className="img">
        <img
          src="https://dekutca.dkut.ac.ke/htmlcodes/library/htmlphpcodes/include/dekutuploading/gallery/gallery.5d3d7c690a5a17.93414579"
          alt="banner imag"
          className="w-full h-96"
        />
      </div> */}

            {/* Gallery carousel */}

            <div className="my-10 mx-5 overflow-x-hidden  images-carousel-container">
                <div className="flex gap-2 images-carousel">
                    {images?.map(({ image, _id, title }) => (
                        <div
                            key={_id}
                            className="min-w-[200px] md:min-w-[260px] lg:min-w-[300px] h-60 lg:h-64 rounded-md overflow-hidden "
                        >
                            <Img
                                className="w-full h-full"
                                src={image}
                                alt={title}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center my-4">
                    <Link
                        to="/gallery"
                        className="bg-dodge-blue px-6 py-2 rounded-md text-white font-bold"
                    >
                        View Our Gallery
                    </Link>
                </div>
            </div>

            <div className="container my-8 md:p-8 lg:p-10">
                <h2 className="text-3xl font-semibold text-dodge-blue mb-4">
                    Upcoming Events
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:mt-8">
                    {[...events?.slice(0, 6)].map((event, i) => (
                        <Link
                            to="#event"
                            key={i}
                            className="relative bg-white min-h-[300px]"
                        >
                            <img
                                src={event.image}
                                alt=""
                                className="w-full h-full"
                            />
                            <div className="flex flex-col items-center absolute bottom-0 inset-x-0 bg-white">
                                <h3 className="text-lg my-2 text-center font-semibold">
                                    {new Date(event.date)
                                        .toDateString()
                                        .toString()}
                                </h3>

                                <Link
                                    to="#event"
                                    className="text-sm sm:text-lg text-dodge-blue"
                                >
                                    {event.title}
                                </Link>

                                <p className="mb-2 mt-2 font-normal">
                                    {event.description?.substring(0, 30) +
                                        "..."}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="py-6 flex justify-center">
                    <Link
                        to="/events"
                        className="bg-sea-green text-white py-3  px-8 text-lg font-medium -tracking-tighter hover:opacity-90"
                    >
                        View More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
