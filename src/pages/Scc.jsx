import React from "react";
import Img from "react-cool-img";

import sccs from "../data/scc.json";

const SccCard = ({ scc }) => {
    const { title, image, description } = scc;
    return (
        <div className="shadow-md rounded-md overflow-hidden border-dodge-blue">
            <Img
                style={{ backgroundColor: "grey" }}
                className="w-full h-48 object-cover"
                src={image}
                alt="SCC Image"
            />
            <h2 className="text-lg font-medium text-slate-900 mx-2 my-4">
                {title}
            </h2>
            <p className="text-sm mx-2 mb-4">{description}</p>
        </div>
    );
};

const Scc = () => {
    return (
        <div className="container  py-8">
            <h1 className="text-3xl mb-8 text-center text-dodge-blue font-bold">
                Small Christian Communities
            </h1>
            <p className="max-w-2xl text-md text-center mx-auto">
                Dekut Catholic Chaplaincy is organised into various movements
                refered to as Small Christian Comunitities (SCC) each of which
                has it's own leaders but working under the main DEKUTCA
                leadership Body led by the CA Chairperson. The core objective of
                the SCC groups is to enhance the involvement of the students in
                church activities, promote asense of belonging and brotherhood
                among the students
            </p>
            <div className="bg-white my-10 p-6 md:p-8 lg:py-12">
                <h2 className="mb-8 text-center text-lg text-slate-800 font-medium">
                    SCC COMMON ACTIVITIES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="p-4 bg-dodge-blue text-center text-white text-md hover:opacity-80 cursor-pointer">
                        {" "}
                        Charity Activities
                    </div>
                    <div className="p-4 bg-dodge-blue text-center text-white text-md hover:opacity-80 cursor-pointer">
                        {" "}
                        SCC Hikes
                    </div>
                    <div className="p-4 bg-dodge-blue text-center text-white text-md hover:opacity-80 cursor-pointer">
                        {" "}
                        Scc Bashes
                    </div>
                    <div className="p-4 bg-dodge-blue text-center text-white text-md hover:opacity-80 cursor-pointer">
                        {" "}
                        Sunday Meetings
                    </div>
                </div>
            </div>

            <div className="py-10">
                <h2 className="mb-8 text-center text-lg text-slate-800 font-medium">
                    MAJOR SCC GROUPS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sccs.major.map((scc) => (
                        <SccCard key={scc.id} scc={scc} />
                    ))}
                </div>
            </div>

            <div className="py-10">
                <h2 className="uppercase mb-8 text-center text-lg text-slate-800 font-medium">
                    Other SCC GROUPS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sccs.others?.map((scc) => (
                        <SccCard key={scc.id} scc={scc} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Scc;
