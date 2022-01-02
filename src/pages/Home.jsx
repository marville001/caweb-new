import React from "react";
import { FaChevronRight, FaCalendarAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="py-0">
      {/* Hero Section */}
      <div
        className="relative -top-14 bg-['url(/assets/images/image1.jpg)']"
        style={{
          backgroundImage: "url(/assets/images/image1.jpg)",
          zIndex: "-09999",
          backgroundSize: "cover",
          minHeight: "70vh",
        }}
      >
        <div
          className="absolute w-full inset-x bottom-0 bg-dodge-blue  md:bg-transparent md:h-[50%]"
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
            <button className="bg-sea-green block w-40 p-2 my-4 text-slate-100 ">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container py-0">
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-2">
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
          <div className="flex flex-col sm:flex-row gap-5 my-5 md:mt-auto  md:col-span-3">
            <a
              href="https://bible.usccb.org/podcasts/video/2022-01-02-reflection-20"
              className="flex-1 shadow-xl bg-white"
            >
              <h2 className="text-xl mb-4 text-slate-800 font-normal uppercase">
                Our Spotlight
              </h2>
              <div className="w-full h-48">
                <img
                  src="https://www.usccb.org/sites/default/files/styles/card_1/public/2021-10/LOGO-INGLESE-PNG2-logo-only.png.jpg?itok=gtkBT26U"
                  alt="334434"
                  className="object-fill w-full h-full"
                />
              </div>
              <div className="p-5 bg-white text-xl">
                <h2 className="text-slate-800 font-semibold">
                  Synod on Synodality
                </h2>
              </div>
            </a>
            <a
              href="https://bible.usccb.org/podcasts/video/2022-01-02-reflection-20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 shadow-xl bg-white"
            >
              <h2 className="text-xl mb-4 text-slate-800 font-normal uppercase">
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
                <div className="flex-shrink pl-8">Read More</div>
              </div>
              <div className="flex shadow-2xl bg-white py-4 px-2 divide-x divide-slate-300">
                <div className="flex-shrink pr-8">Icon</div>
                <div className="flex-1 text-center ">
                  2022 - 01 - 02 USCCB Daily Mass Readings:
                </div>
                <div className="flex-shrink px-4 pl-8">Listen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
