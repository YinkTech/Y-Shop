import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setItem } from "../redux/actions/action";
import Items from "./Items";
import { BsPlus } from "react-icons/bs";

const AllItems = () => {

  // const decrement = () => {
  //   if (count > 1) {
  //     setCount(count - 1);
  //   }
  // };


  const dispatch = useDispatch();
  const fetchItem = async () => {
    const response = await axios
      .get(`https://dummyjson.com/products?limit=12`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(
      setItem(response.data.products),
    );
  };

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container mx-auto py-4">
      <div className=" md:p-2 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
        
        <Items />
      </div>
      <div className="  text-center">
        <button
          className="bg-[#eeb49d] flex items-center mx-auto my-3 text-center text-white text-[22px] p-1 px-[30px] font-semibold "
          style={{ borderRadius: "40px", width: "fit-content" }}
        >
          <span className="mx-1">More</span>{" "}
          <BsPlus className="font-[700] text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default AllItems;
