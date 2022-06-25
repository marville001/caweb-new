import React from "react";

const Mass = () => {
  return (
    <div className="container  py-14">
      <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold tracking-wider">
        Rediscovering The Mass
      </h1>
      <div className="bg-slate-50 my-5 p-4 sm:p-8">
        <div className="md:w-8/12 mx-auto">
          <p className="my-8 text-lg font-light">
            Are you seeking to rediscover your friendship with Jesus? Haven't
            been to Mass in a while and wondering where to start? Start by
            getting to know Jesus again through prayer. It doesn't matter how
            long its been since you have been to Mass. You are always invited to
            encounter Jesus in the Mass.
          </p>
          <p className="text-lg font-light italic px-5 border-l-[3px] border-dodge-blue">
            "Jesus said to them, 'I am the bread of life; whoever comes to me
            will never hunger, and whoever believes in me will never thirst.'" -
            John 6:35
          </p>

          <div className="h-60 md:h-80 my-8">
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dekutcatholicchaplaincy/image/upload/v1656174278/Screenshot_2022-06-25_192350_sgqwrq.png"
              alt=""
            />
          </div>
          <h2 className="my-10 text-3xl text-dodge-blue font-bold tracking-wider">
            Mass Schedule
          </h2>
          <h1 className="text-lg font-medium">Daily Mass</h1>
          <p className="text-lg">5:00 pm Monday - Saturday</p>

          <br />
          <h1 className="text-lg font-medium">Sunday Mass</h1>
          <p className="text-lg">
            9:00am - 11:00 am (Livestream & Public Mass)
          </p>

          <br />
          <h1 className="text-lg font-medium">Adoration</h1>
          <p className="text-lg">Everyday 12-1 pm (Streamed)</p>
          <p className="text-lg">Monday and Wednesday 1-3 pm (Public)</p>
        </div>
      </div>
    </div>
  );
};

export default Mass;
