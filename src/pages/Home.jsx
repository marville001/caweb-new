import React from "react";
import { FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="py-0">
      {/* Hero Section */}
      <div
        className="flex items-end md:relative md:-top-14 bg-['url(/assets/images/image1.jpg)']"
        style={{
          backgroundImage:
            "url(/assets/images/hero-image-1.jpg)",
          zIndex: "-1",
          backgroundSize: "cover",
          backgroundPositionY:"center",
          minHeight: "70vh",
        }}
      >
        <div
          className="md:absolute  w-full inset-x bottom-0 bg-dodge-blue  md:bg-transparent md:h-[50%]"
          style={{
            background:
              "linear-gradient(to top,#122c41 0%,rgba(18,44,65,0)100%)",
          }}
        >
          <div className="md:container p-4 bg-[#0b416c] md:bg-inherit h-full flex flex-col justify-end">
            <h1 className="text-white font-semibold text-3xl md:text-5xl mb-2">
              Christmas
            </h1>
            <p className="text-slate-100 md:w-4/6 text-lg font-light">
              Christmas is one of the most important days of the Church year,
              second only to Easter itself. It is the feast of the incarnation,
              the feast of God becoming flesh (the Latin "in carne" means
              "enfleshment").
            </p>
            <a
              href="#gh"
              className="bg-sea-green text-center block w-40 p-2 my-4 text-slate-100"
              style={{ zIndex: 2000 }}
            >
              LEARN MORE
            </a>
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
                <div className="pb-6 pt-6">
                  <p className="text-lg mb-2">
                    U.S. Bishops’ Migration Chairman Addresses Future of
                    Immigration Reform
                  </p>
                  <a
                    href="#rr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-dodge-blue font-semibold"
                  >
                    Read More <FaChevronRight className="ml-2" />
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
              <FaCalendarAlt className="inline mr-4" /> Daily Readings
            </h2>
            <div className="flex flex-col gap-5 pt-5">
              <div className="flex shadow-2xl bg-white py-4 px-2 divide-x divide-slate-300">
                <div className="flex-shrink pr-8">Icon</div>
                <div className="flex-1 text-center">
                  The Epiphany of the Lord:{" "}
                  <span className="text-sm ml-4 text-slate-600">
                    Lectionary: 20
                  </span>
                </div>
                <a href="#ddddd" className="flex-shrink pl-8 text-dodge-blue">
                  Read More
                </a>
              </div>
              <div className="flex shadow-2xl bg-white py-4 px-2 divide-x divide-slate-300">
                <div className="flex-shrink pr-8">Icon</div>
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
            Missed our Service? Catch up here <br /> or watch us live.
          </h2>
          <p className="text-center my-4 font-medium">
            Did you end up missing our service? No worries, you can watch and or
            listen to our live service, along with many of our other messages on
            our media page.
          </p>
          <p className="text-center font-medium">
            We hope that you enjoy our latest message and many other messages
            from us.
          </p>
          <a
            href="#watch"
            className="uppercase py-2 px-8 text-lg bg-sea-green inline-block my-6 text-white"
          >
            Watch now
          </a>
        </div>
      </div>
      <div className="img">
        <img
          src="https://dekutca.dkut.ac.ke/htmlcodes/library/htmlphpcodes/include/dekutuploading/gallery/gallery.5d3d7c690a5a17.93414579"
          alt="banner imag"
          className="w-full h-96"
        />
      </div>

      <div className="container my-8 bg-white md:p-8 lg:p-10">
        <h2 className="text-3xl font-semibold text-dodge-blue mb-4">
          Event Calendar
        </h2>
        <hr />
        <div className="divide-y">
          <div className="py-6 flex items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-lg mb-2 font-semibold">26</h3>
              <h3 className="text-xs sm:text-lg mb-2 font-normal">Dec 2021</h3>
            </div>
            <a
              href="#event"
              className="text-sm sm:text-lg text-dodge-blue ml-10"
            >
              Christmas Season
            </a>
          </div>
          <div className="py-6 flex items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-lg mb-2 font-semibold">26</h3>
              <h3 className="text-xs sm:text-lg mb-2 font-normal">Dec 2021</h3>
            </div>
            <a
              href="#event"
              className="text-sm sm:text-lg text-dodge-blue ml-10"
            >
              Solemnity of Mary, the Holy Mother of God
            </a>
          </div>
          <div className="py-6 flex items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-lg mb-2 font-semibold">2</h3>
              <h3 className="text-xs sm:text-lg mb-2 font-normal">Feb 2021</h3>
            </div>
            <a
              href="#event"
              className="text-sm sm:text-lg text-dodge-blue ml-10"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing
            </a>
          </div>
          <div className="py-6 flex justify-center">
            <Link
              to="/events"
              className="bg-sea-green text-white py-3  px-8 text-lg font-medium -tracking-tighter hover:opacity-90"
            >
              View calendar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
