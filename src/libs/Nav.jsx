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
            <img src={logo} className="md:w-[150px] w-[80px]" alt="bg-logo" />
          </Link>
        </div>

        <nav
          className={` md:p-[0] md:w-[inherit] md:ms-0 transition-all ${
            isOpen ? ".navbar active h-full w-[94%]" : ".navbar"
          } absolute navbar bg-[#ff] md:relative flex flex-col md:flex-row nav-link z-10 top-[-20em] md:top-[0] sm:justify-center md:space-x-4`}
        >
          <div className="flex  h-full flex-col justify-between">
            <div className="flex-2 flex items-center justify-end text-end md:hidden" onClick={menuClick}>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div
            className="flex-1 gap-5 flex md:inline flex-col"
            >
              {[
                ["HOME", "/"],
                ["About us", "/AboutUs"],
                ["shopping", "/Shopping"],
                ["Contact", "/ContactUS"],
              ].map(([title, url]) => (
                <Link
                  to={`${url}`}
                  key={title}
                  className="transition-all mx-3 font-medium text-[#070707] hover:border-[#eeb49d] border-transparent border-solid border-b-4"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
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
