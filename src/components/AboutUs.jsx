import React from "react";
import Nav from "../libs/Nav";
import About from "../libs/About";
import { Footer } from "../libs/Footer";

const AboutUs = () => {
  return (
    <div>
      <div className=" sm:px-14 p-2 mx-auto">
        <Nav />
      </div>
      <div className=" overflow-x-hidden">
      <About />
      <Footer /></div>
    </div>
  );
};

export default AboutUs;
