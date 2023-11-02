import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sales = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-3 mb-5">
      <div className="mx-auto md:max-w-2xl text-center px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
          className="mt-6 text-center h-[350px] md:h-[400px] sales-img"
         
        >
          <div className="bg-[#ebb29b7d] flex flex-col justify-center items-center w-full h-full">
            <h1 className=" text-[80px] text-white p-0 m-0"
              style={{
                marginBottom: '-80px',
                fontFamily: "PTSerif",
              }}
            >
              UP TO
            </h1>
            <h1 className=" text-[70px]"
              style={{
                fontWeight: 'bolder',
                fontFamily: "PTSerif",
              }}
            >
              30%off
            </h1>
            <button className="bg-[#ebb29b] px-14 font-semibold text-[#fff] py-3" style={{borderRadius: '30px', border: '1px solid #fff'}}>See all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
