import React, { useState } from "react";
import logo from "./../assets/img/logo-bg-solo.png";
import { Spiral as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const menuClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center header">
      <div className="flex items-center gap-7">
        <div className="">
          <Link to="/">
            {" "}
            <img src={logo} className="w-14" alt="bg-logo" />
          </Link>
        </div>

        <nav
          className={` p-3 md:p-[0] w-44 md:w-[inherit] ms-16 md:ms-0 transition-all ${
            isOpen ? ".navbar active" : ".navbar"
          } absolute navbar bg-[#ff] md:relative flex flex-col md:flex-row nav-link z-10 top-[-20em] md:top-[0] sm:justify-center md:space-x-4`}
        >
          {[
            ["HOME", "/"],
            ["About us", "/team"],
            ["shopping", "/projects"],
            ["Contact", "/reports"],
          ].map(([title, url]) => (
            <Link
              to={`${url}`}
              className="transition-all font-medium text-[#070707] hover:border-[#eeb49d] border-transparent border-solid border-b-4"
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <ul className="flex gap-5 items-center text-center">
          <li className="text-dark text-slate-700 font-medium">sign up</li>
          <li className="text-dark text-slate-700 font-medium rounded-full border-2 p-1 px-4 border-black">
            log in
          </li>
          <li className=" inline md:hidden" onClick={menuClick}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
