import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="container min-h-[80vh]">
      <div class="max-w-xl m-auto  flex py-10 justify-center">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div class="border-t border-gray-200 text-center pt-8">
            <h1 class="text-7xl font-bold text-purple-400">404</h1>
            <h1 class="text-4xl font-medium py-8">oops! Page not found</h1>
            <p class="text-xl pb-8 px-12 font-medium">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <Link to="/" class="bg-dodge-blue text-white font-semibold px-6 py-3 rounded-md mr-6">
              HOME
            </Link>
            <Link to="/contact-us" class="bg-sea-green text-white font-semibold px-6 py-3 rounded-md">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
