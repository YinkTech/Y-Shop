import React, { useEffect } from "react";
import Nav from "../libs/Nav";
import { Footer } from "../libs/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import AllItems from "../libs/AllItems";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Shopping = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" overflow-x-hidden">
      <div className=" overflow-x-hidden sm:px-14 p-2">
        <Nav />
      </div>
      <div className="bg-[#e5e5e5] p-2 flex items-center text-sm md:text-md gap-1">
        <Link to="/">Home</Link> <BsChevronRight className="p-1" />{" "}
        <Link to="/Shopping"> Shop </Link>
      </div>
      <div data-aos-easing="linear" className="px-3 " data-aos="zoom">
        <AllItems />
      </div>
      <Footer />
    </div>
  );
};

export default Shopping;
