import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
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
                        Welcome to the website for Dedan Kimathi University of
                        Technology. Sister Irene Stephani Catholic Chaplaincy.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus fuga exercitationem sunt in eum, perferendis
                        maiores aperiam quas alias explicabo harum. Est cumque
                        earum dignissimos ipsa quaerat doloribus ullam
                        officia....
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
    );
};

export default AboutSection;
