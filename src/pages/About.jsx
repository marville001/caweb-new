import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutAction } from "../redux/actions/about";

import ReactHtmlParser from "react-html-parser";
import parse from "html-react-parser";

const About = () => {
    const { about } = useSelector((state) => state.aboutState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAboutAction());
    }, [dispatch]);

    return (
        <div className="my-12">
            <div className="container">
                <h1 className="w-10/12 mx-auto text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide text-dodge-blue leading-8 xl:leading-tight">
                    We Promote the Common Good Which the Church Offers Humankind
                </h1>
                <p className="mt-6 w-10/12 mx-auto md:w-9/12 lg:w-8/12  md:text-xl text-center leading-8 tracking-wide">
                    The Dekut Catholic Chaplaincy is an Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Reiciendis velit amet
                    accusantium debitis numquam. Esse et atque doloribus
                    repellendus, dolore laboriosam maiores porro architecto
                    ullam aspernatur neque similique, magnam excepturi.
                </p>
            </div>

            <div
                className="min-h-[30vh] w-full my-12"
                style={{
                    backgroundImage: "url(/assets/images/image1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}
            ></div>

            <div className="sm:container">
                <h2 className="text-4xl text-center text-dodge-blue font-bold">
                    Our Mission
                </h2>
                <p className="w-5/6 mx-auto text-center mt-3 md:text-lg">
                    {about?.mission}
                </p>

                {/*  */}
                <div className="bg-white p-5 my-8">
                    <div className="w-10/12 mx-auto my-6">
                        <h3 className="text-3xl  text-dodge-blue font-bold text-center">
                            Our Story
                        </h3>
                        {/* <p className="my-5 lg:text-xl tracking-wide font-light text-center md:text-left ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum cum praesentium ut recusandae dolorem possimus
              inventore ullam quisquam odit! Ad harum possimus recusandae beatae
              voluptates? Rem deleniti impedit illum ut debitis dolor libero?
              Excepturi id nulla quia soluta consequuntur placeat.
            </p> */}
                        <div className="my-4 text-center">
                            {parse(ReactHtmlParser(about?.story).toString())}
                        </div>

                        <div className="flex justify-center">
                            <button className="bg-sea-green w-full sm:w-auto sm:px-16 mt-8 py-3 sm:text-lg uppercase text-white hover:opacity-80">
                                Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
