import React from "react";

const GetConnected = () => {
  return (
    <div className="container">
      <h1 className="py-12 text-3xl font-medium text-slate-800 text-center">
        Get Connected
      </h1>

      <div className="bg-white p-6 text-center mb-8">
        <h2 className="text-lg">
          Follow the DEKUTCC on our social media sites.
        </h2>
        <div className="sm:divide-x my-2 flex justify-center items-center flex-wrap">
          <a
            href="#h"
            target="_blank"
            className="p-3 inline-block uppercase text-lg font-semibold"
          >
            facebook
          </a>
          <a
            href="#h"
            target="_blank"
            className="p-3 inline-block uppercase text-lg font-semibold"
          >
            twitter
          </a>
          <a
            href="#h"
            target="_blank"
            className="p-3 inline-block uppercase text-lg font-semibold"
          >
            instagram
          </a>
          <a
            href="#h"
            target="_blank"
            className="p-3 inline-block uppercase text-lg font-semibold"
          >
            youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetConnected;
