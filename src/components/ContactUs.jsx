import React, { useEffect } from "react";
import Contact from "../libs/Contact";
import Nav from "../libs/Nav";
import { Footer } from "../libs/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export const ContactUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="">
        <div className=" sm:px-14 p-2">
          <Nav />
        </div>
        <div
          data-aos-easing="linear"
          data-aos="zoom"
          className="flex overflow-x-hidden flex-col h-[170vh] lg:h-[120vh]  md:h-[130vh] sm:h-[130vh] ssm:h-[130vh] "
        >
          <div className=" shadow-lg w-full md:container mx-auto">
            <div className="contact-img">
              <div className="bg-[#0000007f] w-[full] h-[inherit]">
                <div>
                  <div className="p-10 md:p-20 text-white ">
                    <h3 className="font-bold md:text-2xl mx-2">
                      {" "}
                      Get In <span className="text-[#eeb49d]">Touch</span>{" "}
                    </h3>
                    <p className="md:text-xl font-semibold">
                      Literature surrounded insensible <br />
                      at indulgence or to admiration <br />
                      remarkably. Matter future lovers <br />
                      desire marked boy use.
                    </p>
                  </div>
                  <div className="p-2 md:px-20 mx-auto w-full">
                    <Contact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block" style={{ zIndex: "300" }}>
        <Footer />
      </div>
    </div>
  );
};
