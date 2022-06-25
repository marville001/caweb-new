import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
    return (
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
                        Not sure where to begin? Click below to get in touch. A
                        member of the DEKUTCC Commitee will reach out to
                        personally assist you.
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
    );
};

export default ContactSection;
