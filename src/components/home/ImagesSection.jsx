import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import React, { useEffect, useState } from "react";
import Img from "react-cool-img";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ImagesSection = () => {
    const { images } = useSelector((state) => state.galleryState);

    const [size, setSize] = useState(0);

    const handleResize = (e) => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        setSize(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="my-10 mx-5">
            <div className="max-w-6xl mx-auto">
                <Splide
                    options={{
                        rewind: true,
                        arrows: true,
                        perPage: size < 500 ? 1 : size < 900 ? 2 : 3,
                        gap: 10,
                        autoplay: true,
                        pauseOnHover: true,
                        type: "loop",
                    }}
                    aria-label="React Splide Example"
                >
                    {images?.map(({ image, _id, title }) => (
                        <SplideSlide key={_id}>
                            <div className="h-auto sm:h-60 lg:h-64 rounded-md overflow-hidden ">
                                <Img
                                    className="w-full h-full"
                                    src={image}
                                    alt={title}
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
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
    );
};

export default ImagesSection;
