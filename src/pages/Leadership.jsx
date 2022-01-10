import React from "react";

const LeaderCard = ({ img, name, title, group }) => {
  return (
    <div className="card w-64 bg-white shadow-sm pb-3">
      <div className="h-60 bg-gray-500">
        <img
          className="h-full w-full"
          src={img}
          alt=""
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="text-dodge-blue font-medium">{name}</h4>
        <h4 className="text-dodge-blue font-medium my-2">{title}</h4>
        {group && <h4 className="text-dodge-blue  font-medium my-2">{group}</h4>}
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    <div className="container  py-14">
      <h1 className="text-3xl text-center text-dodge-blue font-bold">
        DEKUTCC Leadership & Structure
      </h1>

      <div className="flex justify-center mt-12">
        <LeaderCard
         img="http://www.kccb.or.ke/home/wp-content/uploads/2013/12/Bishop_30-300x300.jpg"
         name="Name and Name"
         title="Our Chaplain"
         group="Our Chaplain"
        />
      </div>
    </div>
  );
};

export default Leadership;
