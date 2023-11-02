import React from "react";
import Nav from "./Nav";
import laptop from "./../assets/img//beam-remote.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" sm:px-14 p-2 header-full ">
      <Nav />

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center"
      >
        <div className="w-full text-3xl md:text-6xl header-lead">
          <h4 className=" font-bold text-[#333333]">
            Choose the look that suits{" "}
            <span className="text-[#9d7765]">you</span> best
          </h4>
          <p className="text-sm my-4 font-medium header-text">
            Welcome to our virtual shopping paradise, where dreams become
            reality and desires are fulfilled with a single click. Step into a
            world where endless possibilities unfold before your eyes, where
            every aisle holds a treasure waiting to be discovered. Immerse
            yourself in the symphony of colors, textures, and styles that dance
            harmoniously to create a shopping experience like no other.
          </p>
          <div className="flex my-4 gap-6">
            
            <Link to="/Shopping"><button className="p-2 px-8 md:p-3 md:px-12 rounded-full bg-[#dabaad] text-white header-button text-sm md:text-2xl">
              Shop now
            </button></Link>
            <button className="p-2  px-3 md:p-3 md:px-4 rounded-full bg-[#dabaad] text-white header-button md:text-4xl">
              <i className="bi bi-play-fill"></i>
            </button>
          </div>
          <form className=" ">
            <input
              type="search"
              className=" shadow-lg border-1 form rounded-full px-9 p-2 "
              placeholder=" Search"
            />
          </form>
        </div>
        <div className=" header-second text-center w-full">
          <img
            src={laptop}
            alt="gadjet"
            className="w-full md:h-[500px]  xl:h-[600px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
