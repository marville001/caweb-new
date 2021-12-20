import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-slate-800 h-14 flex items-center">
        <div className="container flex justify-between">
          <div className="logo">
              <h1>Logo</h1>
          </div>
          <div className="flex">
              <h4>Nav</h4>
              <h4>Nav</h4>
              <h4>Nav</h4>
          </div>
        </div>
      </div>
      <div className="container h-14">
        <h4 className=" flex items-center justify-end">Header still</h4>
      </div>
    </>
  );
};

export default Header;
