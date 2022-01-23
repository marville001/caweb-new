import React from "react";

import { HiUserGroup, HiOutlineCalendar } from "react-icons/hi";

const CountCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <CountCard
        iconColor="text-orange-800"
        countColor="text-orange-500"
        icon={HiUserGroup}
        title="Total Members"
        count="1,200"
      />
      <CountCard
        iconColor="text-indigo-100"
        countColor="text-indigo-100"
        icon={HiUserGroup}
        title="Total Members"
        count="1,200"
      />
      <CountCard
        iconColor="text-indigo-100"
        countColor="text-indigo-100"
        icon={HiUserGroup}
        title="Total Members"
        count="1,200"
      />
      <CountCard
        iconColor="text-red-800"
        countColor="text-red-500"
        icon={HiOutlineCalendar}
        title="Total Events"
        count="60"
      />
    </div>
  );
};

const CountCard = ({ iconColor, countColor, icon: Icon, title, count }) => (
  <div className="bg-white shadow-md p-8 flex items-center space-x-4">
    <Icon
      className={`text-4xl my-2 ${iconColor ? iconColor : "text-indigo-800"}`}
    />
    <div className="flex flex-col space-y-2">
      <h2 className="tracking-wider font-bold text-md text-gray-600">
        {title}
      </h2>
      <span
        className={`${
          countColor ? countColor : "text-green-800"
        } tracking-wider font-bold text-2xl`}
      >
        {count}
      </span>
    </div>
  </div>
);

export default CountCards;
