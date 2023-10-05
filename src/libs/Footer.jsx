import React from "react";
import logo from "./../assets/img/logo-bg-solo.png";
import {
  IoLogoDiscord,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

import apple from "./../assets/img/storeApp/apple.png";
import google from "./../assets/img/storeApp/google.png";
import roku from "./../assets/img/storeApp/roku.png";

export const Footer = () => {
  return (
    <div
      className="py-5 p-4"
      style={{ marginTop: "10px", background: "#eeb49d", color: "#3b3837" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  gap-10">
          <div className="lg:w-1/4 text-center lg:text-start">
            <div className="">
              <img
                src={logo}
                style={{ width: "65px", border: "1px solid #000" }}
                alt="logo"
                className="mx-auto lg:mx-px"
              />
              <h4
                className="pt-3"
                style={{ fontWeight: "bolder", marginBottom: "10px" }}
              >
                Y Shop
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Gravida mattis semper
                vitae urna sem urna mauris.
              </p>
            </div>{" "}
          </div>
          <div className="flex w-full flex-col lg:flex-row justify-around whitespace-nowrap md:font-semibold">
            <div className="flex justify-between md:justify-around flex-row lg:gap-20">
              <div>
                <h4
                  className="pt-3"
                  style={{ fontWeight: "bolder", marginBottom: "10px" }}
                >
                  Help
                </h4>
                <ul>
                  <li>Privacy Policy</li>
                  <li className="my-2">Shopping & Delivery</li>
                  <li>Refund policy</li>
                  <li className="my-2">Track your Order</li>
                </ul>
              </div>
              <div>
                <h4
                  className="pt-3"
                  style={{ fontWeight: "bolder", marginBottom: "10px" }}
                >
                  Store
                </h4>
                <ul>
                  <li>Man Fashion</li>
                  <li className="my-2">Women Fashion</li>
                  <li>Store Sale</li>
                  <li className="my-2">Collections</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between flex-col lg:flex-row lg:gap-20">
            <div className="flex flex-col justify-center items-center lg:items-start md:justify-start">
              <h4
                className="pt-3 text-center md:text-start"
                style={{ fontWeight: "bolder", marginBottom: "10px" }}
              >
                Watch On
              </h4>
              <ul className="mx-auto flex lg:flex-col items-center gap-2 md:mx-px text-center">
                <li className="">
                  <img
                    src={google}
                    alt="google"
                    className="my-2 mx-auto w-40"
                    style={{ borderRadius: "10px" }}
                  />
                </li>
                <li>
                  <img
                    src={apple}
                    alt="apple"
                    className=" w-40"
                    style={{ borderRadius: "10px" }}
                  />
                </li>
                <li>
                  <img
                    src={roku}
                    alt="roku"
                    className=" w-40"
                    style={{ borderRadius: "10px" }}
                  />
                </li>
              </ul>
            </div>
            <div  className="flex flex-col justify-center items-center lg:items-start md:justify-start">
              <h4
                className="pt-3 mb-5 md:mb-2 text-center md:text-start"
                style={{
                  fontWeight: "bolder",
                  marginBottom: "10px",
                }}
              >
                Follow us
              </h4>
              <ul className="flex justify-center mx-auto lg:flex-col items-center lg:items-start gap-10 lg:gap-3">
                <div className="flex flex-col gap-3">
                  <li className="flex gap-2 items-center">
                    <IoLogoInstagram /> Instagram
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoLogoTwitter /> Twitter
                  </li>
                </div>
                <div className="flex flex-col gap-3">
                  <li className="flex gap-2 items-center">
                    <IoLogoLinkedin /> Linkedin
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoLogoDiscord /> Discord
                  </li>
                </div>
              </ul>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
