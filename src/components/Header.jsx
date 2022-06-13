import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaSearch, FaCalendarAlt, FaBars, FaChurch, FaUserCircle } from "react-icons/fa";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Menu } from "@headlessui/react";
import AccountMenu from "./AccountMenu";

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
        <div className="md:absolute md:px-4 flex-col md:hidden flex md:group-hover:flex md:top-full min-w-[250px] md:left-0 w-auto h-auto bg-dodge-blue">
          {children}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.accountUsers);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const {pathname} = useLocation();

  return (
    <>
      <div
        className="bg-slate-800 h-15 flex items-center z-[10000]"
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
                DEKUT Catholic Chaplaincy
              </span>
            </div>
            <h4 className="text-white sm:hidden">DEKUT CC</h4>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              className="hidden md:block text-md uppercase text-slate-100"
              to="/prayers"
            >
              Catholic Prayers
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
                className="text-[12px] hidden sm:flex sm:text-sm md:text-md uppercase text-slate-100 bg-[#236092] h-14 items-center px-4 sm:px-6"
                to="/library"
              >
                Library
              </Link>
              {user._id ? (
                <Menu as="div" className="z-[1000] relative inline-block text-left">
                <div className="bg-sea-green h-full flex items-center p-3">
                  <Menu.Button className="inline-flex justify-center items-center w-full text-sm font-medium text-white">
                  <p className="text-sm">{user?.firstname || "Welcome"}</p>
                  <FaUserCircle className="w-6 h-6 ml-2" />
                  </Menu.Button>
                </div>
                <AccountMenu />
              </Menu>
              ) : (
                <Link
                  className="text-[12px] sm:text-sm md:text-md uppercase text-slate-100 bg-[#407b54] h-14 flex items-center px-4 sm:px-6"
                  to="/login"
                >
                  Login
                </Link>
              )}
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
        absolute
        bottom-0
        left-0
        top-12 sm:top-14
        z-20
        md:static
        md:top-0
        ${pathname === "/" && "md:relative"}
        md:static
        duration-300
        transition-all
        ${!isMenuOpen && "-translate-x-full"}
        md:translate-x-0
        `}
      >
        <div
          className="
                container md:h-14 md:static mx-auto md:min-h-fit bg-dodge-blue 
                md:bg-transparent py-0 flex items-startmd:items-center md:justify-end 
                flex-col md:flex-row z-[700]
            "
        >
          <Link
            onClick={() => setIsMenuOpen(false)}
            className={`md:hidden my-4 text-sm uppercase text-slate-100`}
            to="/prayers"
          >
            Catholic Prayers
          </Link>
          <NavDropDownLinkItem title="about dekutcc" to="/">
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={`my-2 text-sm uppercase text-slate-100`}
              to="/about"
            >
              our role & mission
            </Link>
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
              to="/contact-us"
            >
              Contact
            </Link>
          </NavDropDownLinkItem>
          <NavDropDownLinkItem title="Prayers & Worship">
            {/* <Link
              onClick={() => setIsMenuOpen(false)}
              className={`my-2 text-sm uppercase text-slate-100`}
              to="/daily-readings"
            >
              Daily readings calendar
            </Link> */}
            <Link
              onClick={() => setIsMenuOpen(false)}
              className=" my-2 text-sm uppercase text-slate-100"
              to="/prayers"
            >
              Prayer
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className=" my-2 text-sm uppercase text-slate-100"
              to="/mass"
            >
              Our Mass
            </Link>
          </NavDropDownLinkItem>
          <NavLinkItem
            closeMenu={() => setIsMenuOpen(false)}
            to="/bible"
            title="Bible"
          />
          <NavLinkItem
            closeMenu={() => setIsMenuOpen(false)}
            to="/scc"
            title="SCC"
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
