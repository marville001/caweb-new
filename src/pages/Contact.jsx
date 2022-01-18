import React from "react";

const Contact = () => {
  return (
    <div className="container  py-14">
      <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold">
        Contact Us
      </h1>
      <p className="py-10 max-w-lg text-center mx-auto">
        To receive an email response, please use the form below. Fill in any
        query you have about DEKUTCC or any feedback. You will get feedback
        within some few hours if not minutes.
      </p>

      <div className="bg-white p-4 md:p-8 max-w-3xl mx-auto">
        <div className="md:flex md:gap-2">
          <div className="form-group my-4 flex-1">
            <input
              type="text"
              className="p-3 block border-slate-200 border-2 w-full mt-2"
              placeholder="Firstname..."
            />
          </div>
          <div className="form-group my-4 flex-1">
            <input
              type="text"
              className="p-3 block border-slate-200 border-2 w-full mt-2"
              placeholder="Lastname"
            />
          </div>
        </div>
        <div className="md:flex md:gap-2">
          <div className="form-group my-2 flex-1">
            <input
              type="email"
              className="p-3 block border-slate-200 border-2 w-full mt-2"
              placeholder="Enter your email..."
            />
          </div>
          <div className="form-group my-2 flex-1">
            <input
              type="text"
              className="p-3 block border-slate-200 border-2 w-full mt-2"
              placeholder="Subject"
            />
          </div>
        </div>
        <div className="form-group my-2 flex-1">
            <textarea
              type="text"
              rows="5"
              className="p-3 block border-slate-200 border-2 w-full mt-2"
              placeholder="Message"
            >

            </textarea>
          </div>

        <button className="w-full p-2 mt-5 text-white text-center text-lg uppercase bg-dodge-blue cursor-pointer">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Contact;
