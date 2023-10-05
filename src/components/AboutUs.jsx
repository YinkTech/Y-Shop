import React from "react";
import Nav from "../libs/Nav";
import About from "../libs/About";
import { Footer } from "../libs/Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="container pt-3 mx-auto">
        <Nav />
      </div>
        <About />
      <Footer />
    </div>
  );
};

export default AboutUs;
