import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sales = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-3 mb-5">
      <div className="mx-auto max-w-2xl text-center px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2
          data-aos="fade-up"
          className="text-2xl font-bold text-center tracking-tight text-[#333]"
        >
          Sales
        </h2>
        <h6 data-aos="fade-up">
          Compliment interested discretion estimating on stimulated apartments
          oh. Dear so <br /> sing when in find read of call. As distrusts
          behaviour abilities
        </h6>
        <div
          data-aos="fade-up"
          className="mt-6 text-center h-[200px] md:h-[400px] sales-img"
          style={{ height: "" }}
        >
          <h1
            className=" text-[70px]  py-[40px] md:pt-[150px] text-bold text-white"
            style={{
              fontWeight: "bolder",
              fontFamily: "monospace",
            }}
          >
            30% Off
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sales;
