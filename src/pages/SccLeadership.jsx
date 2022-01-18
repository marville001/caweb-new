import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LeaderCard = ({ img, name, title, group, width }) => {
  return (
    <div
      className={`${width && "min-w-[" + width + "]"} bg-white shadow-sm pb-3`}
    >
      <div className=" w-full h-60 bg-gray-500">
        <img className="h-full w-full" src={img} alt="" />
      </div>
      <div className="p-4 text-center">
        <h4 className="text-dodge-blue font-medium">{name}</h4>
        <h4 className="text-dodge-blue font-medium my-2">{title}</h4>
        {group && (
          <h4 className="text-dodge-blue  font-medium my-2">{group}</h4>
        )}
      </div>
    </div>
  );
};

const LeadersListPanel = ({ name }) => {
  return (
    <Tab.Panel className="bg-white rounded-xl p-6">
      <h3 className="my-6 text-center text-dodge-blue text-3xl font-bold uppercase">
        {name}
      </h3>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {[
          "https://media.istockphoto.com/photos/cheerful-fashionable-adult-man-in-city-setting-picture-id1310533180?b=1&k=20&m=1310533180&s=170667a&w=0&h=EdRuvIkrMifhyZJkHXf5Pk68ri44_g7OFnU8lIdbc-c=",
          "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://media.istockphoto.com/photos/young-woman-using-smart-phone-on-a-city-street-picture-id1301953709?b=1&k=20&m=1301953709&s=170667a&w=0&h=sMr7J0Pv3kBCELxjhl4P8DD3BSCVrmIWUXF37r23GGU=",
          "https://media.istockphoto.com/photos/african-mid-woman-using-smartphone-at-home-picture-id1319763415?b=1&k=20&m=1319763415&s=170667a&w=0&h=J9vN7w33elL-hY1CogyTB2BzzKpiEbmPqTdsQ6fBbuI=",
          "https://media.istockphoto.com/photos/mixed-race-man-paying-online-on-mobile-phone-picture-id1319763191?b=1&k=20&m=1319763191&s=170667a&w=0&h=apc34sMJIHX8mQXzisVmpWtXk7-Xc_CIDn8xibFUoHU=",
          "https://media.istockphoto.com/photos/asian-chinese-senior-man-with-facial-hair-using-laptop-typing-working-picture-id1331469701?b=1&k=20&m=1331469701&s=170667a&w=0&h=I2AJQklkgjD599Rhmuj4s6lX4VJIZC3AY_mMMU3tIbQ=",
          "https://media.istockphoto.com/photos/and-then-you-came-along-and-turned-my-life-around-picture-id1300273437?b=1&k=20&m=1300273437&s=170667a&w=0&h=aBUwwJX9_OCJGcMnvbRpMo39AD3EHUbfsabWjs2iD4I=",
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        ].map((i) => (
          <LeaderCard
            img={i}
            name="Name and Name"
            title="Person Title"
            group="Group Represented"
          />
        ))}
      </div>
    </Tab.Panel>
  );
};

export default function SccLeadership() {
  return (
    <div className="container">
      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex max-w-md mx-auto p-1 space-x-1 bg-blue-900/80 rounded-xl">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              St Angelus
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              St Peters
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              St Joseph
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <LeadersListPanel name="ST Angelus" />
            <LeadersListPanel name="ST PETERS" />
            <LeadersListPanel name="st joseph" />
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
