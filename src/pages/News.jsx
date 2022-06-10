import React from "react";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <div className="container  py-14">
            <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold tracking-wider">
                Our News
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:mt-8 py-12">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((news, i) => (
                    <Link
                        key={news}
                        to="#event"
                        className="bg-white min-h-[300px]"
                    >
                        <img
                            src={
                                "https://www.usccb.org/sites/default/files/styles/panel_image/public/2020-02/bishop.jpg?itok=advFQGkx"
                            }
                            alt=""
                            className="w-full h-20"
                        />
                        <div className="p-2 bg-white">
                            <h3 className="text-sm my-2 font-semibold">
                                {new Date().toDateString().toString()}
                            </h3>

                            <Link
                                to="#event"
                                className="text-sm sm:text-lg text-dodge-blue"
                            >
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing
                            </Link>

                            <p className="mb-2 mt-2 text-sm font-normal">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolor veritatis provident
                                facere? Est, veritatis dolore consequatur
                                delectus fugiat, architecto perferendis ratione
                                ipsum, repellat suscipit molestiae.
                                {"..."}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default News;
