import React from "react";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <div className="container py-12 sm:min-h-[500px]">
      <h4 className="text-3xl my-10 uppercase font-bold text-dodge-blue text-center">
        Comming Soon
      </h4>
      <div className="flex justify-center">
        <Link className="bg-sea-green text-sm px-4 py-2 text-white tracking-widest rounded" to="/">Go Back Home</Link>
      </div>
    </div>
  );
};

export default CommingSoon;
