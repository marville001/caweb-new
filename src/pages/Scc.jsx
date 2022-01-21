import React from "react";

const Scc = () => {
  return (
    <div className="container  py-8">
      <h1 className="text-3xl mb-8 text-center text-dodge-blue font-bold">
        Small Christian Communities
      </h1>
      <p className="max-w-2xl text-md text-center mx-auto">
        Dekut Catholic Chaplaincy is organised into various movements refered to
        as Small Christian Comunitities (SCC) each of which has it's own leaders
        but working under the main DEKUTCA leadership Body led by the CA
        Chairperson. The core objective of the SCC groups is to enhance the
        involvement of the students in church activities, promote asense of
        belonging and brotherhood among the students
      </p>
      <div className="bg-white my-10 p-6 md:p-8 lg:py-12">
        <h2 className="mb-8 text-center text-lg text-slate-800 font-medium">SCC COMMON ACTIVITIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-4 bg-dodge-blue text-center text-white text-md hover:opacity-80 cursor-pointer"> Charity Activities</div>
          <div className="p-4 bg-dodge-blue text-center text-white text-md hover:opacity-80 cursor-pointer"> SCC Hikes</div>
          <div className="p-4 bg-dodge-blue text-center text-white text-md hover:opacity-80 cursor-pointer"> Scc Mashes</div>
          <div className="p-4 bg-dodge-blue text-center text-white text-md hover:opacity-80 cursor-pointer"> Sunday Meetings</div>
        </div>
      </div>
    </div>
  );
};

export default Scc;
