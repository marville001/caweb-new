import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrayers } from "../redux/actions/prayersAction";

const PrayerDisclosure = ({ prayer: { title, prayer } }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-center text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span className="sm:text-lg">{title}</span>
            <HiChevronUp
              className={`${
                !open ? "transform rotate-180" : ""
              } w-5 h-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-md tracking-wider leading-6 mx-auto text-center text-gray-500 md:max-w-[80%]">
            {prayer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const Prayers = () => {
  const { prayers, isLoadingPrayers } = useSelector(
    (state) => state.userPrayersState
  );

  const [filteredPrayers, setFilteredPrayers] = useState([]);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const tempPrayers = prayers.filter((p) =>
      p.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPrayers(tempPrayers);
  };

  useEffect(() => {
    dispatch(getPrayers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPrayers(prayers);
  }, [prayers]);

  return (
    <div className="container p-1  py-8">
      <h1 className="text-3xl text-center text-dodge-blue font-bold">
        Catholic Prayers
      </h1>
      <div className="w-full space-y-5 max-w-2xl p-2 my-10 mx-auto rounded-2xl">
        <div className="flex">
          <input
            onChange={handleSearch}
            type="text"
            className="p-2 sm:text-lg ring-1 
          focus:outline-none w-full text-sm  focus:border-0 focus:ring-dodge-blue rounded flex-1"
            placeholder="Search prayer here..."
          />
          {/* <button className="p-2 bg-dodge-blue rounded ring-2 text-white uppercase hover:opacity-80">
            Search
          </button> */}
        </div>
        {isLoadingPrayers && (
          <div className="animate-spin flex justify-center p-4">
            <FaSpinner />
          </div>
        )}
        {filteredPrayers.map((prayer) => (
          <PrayerDisclosure key={prayer._id} prayer={prayer} />
        ))}
      </div>
    </div>
  );
};

export default Prayers;
