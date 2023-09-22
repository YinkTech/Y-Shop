import React from "react";

const Subscribe = () => {
  return (
    <div style={{ background: "#fbf8f7" }} className="text-center p-16">
      <div>
        <h2
          style={{ fontFamily: "mono", fontWeight: "light", fontSize: "30px" }}
        >
          Subscribe and Get 30%OFF
        </h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your email"
          className="subscribe shadow md:w-[300px]"
        />
        <button className="subBtn">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
