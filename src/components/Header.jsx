import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaSearch, FaCalendarAlt, FaBars } from "react-icons/fa";

const NavLinkItem = ({ to, title, closeMenu }) => {
  const { pathname } = useLocation();
  return (
    <NavLink
      onClick={closeMenu}
      className={`text-sm md:text-md my-2  md:px-4 uppercase font-medium md:h-14 flex items-center ${
        pathname === to
          ? "text-slate-100 bg-dodge-blue "
          : "text-slate-100 md:text-slate-600 "
      }" hover:bg-dodge-blue hover:text-slate-100
      ${pathname === "/" ? "text-slate-100 md:text-slate-100" :""}`
    
    }
      to={to}
    >
      {title}
    </NavLink>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-slate-800 h-14 flex items-center z-10" style={{
          zIndex:"99999"
        }}>
        <div className="container flex justify-between">
          <div className="logo flex items-center">
            <img
              className="h-7"
              src="https://www.usccb.org/themes/custom/ai/usccb-logo.svg"
              alt="ggggg"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link
              className="hidden md:block text-md uppercase text-slate-100"
              to="/"
            >
              Daily Readings
            </Link>
            <Link className="text-md uppercase text-slate-100" to="/">
              <FaCalendarAlt className="h-8 w-3 mx-4" />
            </Link>
            <Link
              className="hidden md:block text-md uppercase text-slate-100"
              to="/"
            >
              MASS
            </Link>
            <div className="flex">
              <Link
                className="text-[12px] sm:text-sm md:text-md uppercase text-slate-100 bg-[#236092] h-14 flex items-center px-6"
                to="/"
              >
                Library
              </Link>
              <Link
                className="text-[12px] sm:text-sm md:text-md uppercase text-slate-100 bg-[#407b54] h-14 flex items-center px-6"
                to="/"
              >
                Contact Us
              </Link>
            </div>
            <FaSearch className="hidden md:block ml-2 h-8 w-5 text-slate-100" />
            <FaBars
              onClick={toggleMenu}
              className=" cursor-pointer ml-2 h-8 w-5 text-slate-100 md:hidden"
            />
          </div>
        </div>
      </div>
      <div
        className={`
        flex 
        w-80 
        md:w-full 
        ml-auto
        transform
        duration-300
        transition-all
        ${!isMenuOpen && "translate-x-full"}
        md:translate-x-0
        `}
        style={{
          zIndex:"9999"
        }}
      >
        <div
          className="
          container 
          min-h-[92vh]
          md:h-14 
          absolute 
          md:static
                mx-auto 
                md:min-h-fit 
                bg-dodge-blue 
                md:bg-transparent 
                py-0 
                flex 
                items-start
                md:items-center 
                md:justify-end 
                flex-col
                md:flex-row
        "
        >
          <Link
            onClick={() => setIsMenuOpen(false)}
            className={`md:hidden my-2 text-sm uppercase text-slate-100`}
            to="/readings"
          >
            Daily Readings
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className=" md:hidden my-2 text-sm uppercase text-slate-100"
            to="/mass"
          >
            Find Mass
          </Link>
          <NavLinkItem
            closeMenu={() => setIsMenuOpen(false)}
            to="/"
            title="about dekutcc"
          />
          <NavLinkItem
            closeMenu={() => setIsMenuOpen(false)}
            to="/d"
            title="Prayers & Worship"
          />
          <NavLinkItem
            closeMenu={() => setIsMenuOpen(false)}
            to="/f"
            title="Bible"
          />
          <NavLinkItem
            closeMenu={() => setIsMenuOpen(false)}
            to="/scc"
            title="SCC"
          />
          <NavLinkItem
            closeMenu={() => setIsMenuOpen(false)}
            to="/news"
            title="news"
          />
          <NavLinkItem
            closeMenu={() => setIsMenuOpen(false)}
            to="/gallery"
            title="Gallery"
          />
          <NavLinkItem
            closeMenu={() => setIsMenuOpen(false)}
            to="/resources"
            title="resources"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
