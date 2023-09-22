import React from "react";
import "./../assets/css/Preloader.css";
import preload from "./../assets/img/eShop.gif";

const Preloader = () => {
  return (
    <div
      className="preloader-container text-center"
      style={{ transition: "0.2s all ease-in-out" }}
    >
      <div className="preloader">
        <p className="perk text-2xl text-md-4xl fw-bolder">
          Welcome to Best Shop
        </p>

        <div className="mx-2">
          <img src={preload} style={{ width: "200px" }} alt="loader gif" />
        </div>
        {/* <div className="loader"></div> */}
      </div>
    </div>
  );
};

export default Preloader;
