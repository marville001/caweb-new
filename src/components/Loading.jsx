import React from "react";

import { FaSpinner } from "react-icons/fa";
const Loading = () => {
  return (
      <div className="w-screen h-screen flex items-center justify-center">
      <FaSpinner className="w-16 h-16 text-dodge-blue animate-spin" />
  </div>
  );
};

export default Loading;
