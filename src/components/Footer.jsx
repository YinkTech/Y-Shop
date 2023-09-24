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
      className="py-5 p-4 text-center"
      style={{ marginTop: "10px", background: "#f3c7b5" }}
    >
      <div className="container mx-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
        <div>
          <img
            src={logo}
            style={{ width: "65px", border: "1px solid #000", margin: "auto" }}
            alt="logo"
          />
          <h4
            className="pt-3"
            style={{ fontWeight: "bolder", marginBottom: "10px" }}
          >
            Y Shop
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Gravida mattis semper vitae
            urna sem urna mauris.
          </p>
        </div>
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
        <div>
          <h4
            className="pt-3"
            style={{ fontWeight: "bolder", marginBottom: "10px" }}
          >
            Watch On
          </h4>
          <ul className="mx-auto">
            <li>
              <img
                src={apple}
                alt="apple"
                style={{ borderRadius: "10px", width: "120px", margin: "auto" }}
              />
            </li>
            <li className="my-1">
              <img
                src={google}
                alt="google"
                className="my-2"
                style={{ borderRadius: "10px", width: "120px", margin: "auto" }}
              />
            </li>
            <li>
              <img
                src={roku}
                alt="roku"
                style={{ borderRadius: "10px", width: "120px", margin: "auto" }}
              />
            </li>
          </ul>
        </div>
        <div className="md:ms-6">
          <h4
            className="pt-3 mb-5 md:mb-2 md:text-start"
            style={{
              fontWeight: "bolder",
              marginBottom: "10px",
            }}
          >
            Follow us
          </h4>
          <ul className="flex flex-col items-center md:items-start">
            <li className="flex gap-2 items-center">
              <IoLogoInstagram /> Instagram
            </li>
            <li className="my-4 flex gap-2 items-center">
              <IoLogoTwitter /> Twitter
            </li>
            <li className="flex gap-2 items-center">
              <IoLogoLinkedin /> Linkedin
            </li>
            <li className="my-4 flex gap-2 items-center">
              <IoLogoDiscord /> Discord
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
