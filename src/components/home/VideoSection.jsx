import React from "react";

const VideoSection = () => {
    return (
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
                        To view all our live stream, please visit our youtube
                        channel.
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
    );
};

export default VideoSection;
