import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaSearch, FaCalendarAlt, FaBars, FaChurch } from "react-icons/fa";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";

const NavLinkItem = ({ to, title, closeMenu, ...rest }) => {
  const { pathname } = useLocation();
  return (
    <NavLink
      onClick={closeMenu}
      className={`text-sm md:text-md my-2  md:px-4 uppercase font-medium md:h-14 flex items-center ${
        pathname === to
          ? "text-slate-100 bg-dodge-blue "
          : "text-slate-100 md:text-slate-600 "
      }" hover:bg-dodge-blue hover:text-slate-100
      ${pathname === "/" ? "text-slate-100 md:text-slate-100" : ""}`}
      to={to}
      {...rest}
    >
      {title}
    </NavLink>
  );
};

const NavDropDownLinkItem = ({ to, title, children, ...rest }) => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  return (
    <div
      onClick={() => setActive(!active)}
      className={`w-full md:w-auto cursor-pointer md:relative group text-sm md:text-md my-2  md:px-4 uppercase font-medium md:h-14 flex flex-col md:flex-row md:items-center ${
        pathname === to
          ? "text-slate-100 bg-dodge-blue "
          : "text-slate-100 md:text-slate-600 "
      }" hover:bg-dodge-blue hover:text-slate-100
      ${pathname === "/" ? "text-slate-100 md:text-slate-100" : ""}`}
      title={title}
      {...rest}
    >
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <span className="md:hidden ml-20">
          {active ? (
            <HiChevronDown className="text-xl" />
          ) : (
            <HiChevronRight className="text-xl" />
          )}
        </span>
      </div>
      <div className={`${active ? "block my-4 ml-4" : "hidden md:block"}`}>
        <div className="md:absolute md:px-4 flex-col md:hidden flex md:group-hover:flex md:top-full md:left-0 w-auto h-auto bg-dodge-blue">
          {children}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="bg-slate-800 h-15 flex items-center z-10"
        style={{
          zIndex: "99999",
        }}
      >
        <div className="container flex justify-between">
          <Link to="/" className="logo flex items-center">
            {/* <img
              className="h-7"
              src="https://www.usccb.org/themes/custom/ai/usccb-logo.svg"
              alt="ggggg"
            /> */}
            <FaChurch className="text-4xl mr-2 text-slate-200" />
            <div className="hidden sm:flex flex-col gap-0 my-2">
              <span className="text-slate-200 tracking-wider md:font-bold text-xs">
                Blessed Sister Irene Stefani
              </span>
              <span className="text-slate-200 tracking-widest md:font-bold text-sm">
                Catholic Chaplaincy
              </span>
            </div>
            <h4 className="text-white sm:hidden">DEKUT CC</h4>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              className="hidden md:block text-md uppercase text-slate-100"
              to="/daily-readings"
            >
              Daily Readings
            </Link>
            <Link
              className="hidden sm:inline-block text-md uppercase text-slate-100"
              to="/events"
            >
              <FaCalendarAlt className="h-8 w-3 mx-4" />
            </Link>
            <Link
              className="hidden md:block text-md uppercase text-slate-100"
              to="/mass"
            >
              MASS
            </Link>
            <div className="flex">
              <Link
                className="text-[12px] sm:text-sm md:text-md uppercase text-slate-100 bg-[#236092] h-14 flex items-center px-4 sm:px-6"
                to="/library"
              >
                Library
              </Link>
              <Link
                className="text-[12px] sm:text-sm md:text-md uppercase text-slate-100 bg-[#407b54] h-14 flex items-center px-4 sm:px-6"
                to="/login"
              >
                Login
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
          zIndex: "9999",
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
            to="/daily-readings"
          >
            Daily Readings
          </Link>
          <NavDropDownLinkItem title="about dekutcc" to="/">
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={`my-2 text-sm uppercase text-slate-100`}
              to="/leadership"
            >
              Leadership
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className=" my-2 text-sm uppercase text-slate-100"
              to="/events"
            >
              Events
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className=" my-2 text-sm uppercase text-slate-100"
              to="/contact"
            >
              Contact
            </Link>
          </NavDropDownLinkItem>
          <NavDropDownLinkItem title="Prayers & Worship">
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={`my-2 text-sm uppercase text-slate-100`}
              to="/calendar"
            >
              Daily readings calendar
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className=" my-2 text-sm uppercase text-slate-100"
              to="/events"
            >
              Prayer
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className=" my-2 text-sm uppercase text-slate-100"
              to="/contact"
            >
              Our Mass
            </Link>
          </NavDropDownLinkItem>
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
