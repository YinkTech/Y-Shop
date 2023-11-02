import React from "react";
import { BsEnvelope, BsTelephoneFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <div className=" transition-all md:h-[350px] md:pt-[90px] flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-20 bg-[#5c5c5c] p-5">
        <div
          className="bg-[#ffffff] md:h-[400px] shadow-2xl w-full md:w-1/2 p-3 lg:w-1/3"
          style={{ borderRadius: "7px" }}
        >
          <h4 className="font-bold mb-5">Send a messages</h4>
          <div className="p-2 flex flex-col gap-4">
            <input
              type="text"
              className="p-3 h-10 contact text-[14px]"
              placeholder="Full Name"
              style={{ border: "1px solid #f5d4c6", borderRadius: "20px" }}
            />
            <input
              type="text"
              className="p-3 h-10 contact text-[14px]"
              placeholder="Phone Number "
              style={{ border: "1px solid #f5d4c6", borderRadius: "20px" }}
            />
            <input
              type="text"
              className="p-3 h-10 contact text-[14px]"
              placeholder="Email "
              style={{ border: "1px solid #f5d4c6", borderRadius: "20px" }}
            />
            <input
              type="text"
              className="p-3 h-10 contact text-[14px]"
              placeholder="How can we help"
              style={{ border: "1px solid #f5d4c6", borderRadius: "20px" }}
            />
            <button
              className="bg-[#eeb49d] mx-auto my-3 text-center text-white text-[22px] p-1 px-[30px] font-semibold "
              style={{ borderRadius: "40px", width: "fit-content" }}
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          <div className="text-white w-full">
            <h3 className="font-[700] lg:text-[28px] text-[18px] mb-5">
              Contact Information{" "}
            </h3>
            <ul className="font-[500] flex flex-col gap-3 lg:gap-7">
              <li className="flex items-center text-[20px] gap-3">
                <BsTelephoneFill className=" -rotate-90 p-1" />{" "}
                <span>+92(555554321)</span>
              </li>
              <li className="flex items-center text-[20px] gap-3">
                <BsEnvelope className="p-1" /> <span>y-shop@gmail.com</span>
              </li>
              <li className="flex items-center text-[20px] gap-3">
                <FiMapPin className="p-1" /> <span>location</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
