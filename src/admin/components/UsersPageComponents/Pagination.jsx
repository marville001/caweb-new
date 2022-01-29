import React from "react";

/* This example requires Tailwind CSS v2.0+ */
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi";


const Pagination = ({ total, page, pageSize, count, setPage }) => {
  const calculateTotalPages = (total, perPage) => {
    const pages = Math.ceil(total / perPage);

    return pages;
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < calculateTotalPages(total, pageSize)) {
      setPage(page + 1);
    }
  };

  console.log(calculateTotalPages(total, pageSize));

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#f"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#f"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {parseInt((page - 1) * pageSize) + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {parseInt((page - 1) * pageSize + count)}
            </span>{" "}
            of <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <div
              onClick={() => setPage(1)}
              className={`${
                page > 1
                  ? "cursor-pointer bg-white hover:bg-gray-100"
                  : "cursor-not-allowed bg-red-100"
              } relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium text-gray-500`}
            >
              <span className="sr-only">Next</span>
              <HiChevronDoubleLeft className="h-5 w-5" aria-hidden="true" />
            </div>
            <div
              onClick={previousPage}
              className={`${
                page > 1
                  ? "cursor-pointer bg-white hover:bg-gray-100"
                  : "cursor-not-allowed bg-red-100"
              } relative inline-flex items-center px-2 py-2  border border-gray-300 text-sm font-medium text-gray-500`}
            >
              <span className="sr-only">Next</span>
              <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </div>
            <div
            aria-current="page"
            className="cursor-pointer z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            {page}
          </div>
            <div
              onClick={nextPage}
              className={`${
                page < calculateTotalPages(total, pageSize)
                  ? "cursor-pointer bg-white hover:bg-gray-100"
                  : "cursor-not-allowed bg-red-100"
              } relative inline-flex items-center px-2 py-2 border border-gray-300  text-sm font-medium text-gray-500`}
            >
              <span className="sr-only">Next</span>
              <HiChevronRight className="h-5 w-5" aria-hidden="true" />
            </div>
            <div
              onClick={() => setPage(calculateTotalPages(total, pageSize))}
              className={`${
                page < calculateTotalPages(total, pageSize)
                  ? "cursor-pointer bg-white hover:bg-gray-100"
                  : "cursor-not-allowed bg-red-100"
              } relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300  text-sm font-medium text-gray-500`}
            >
              <span className="sr-only">Next</span>
              <HiChevronDoubleRight className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
