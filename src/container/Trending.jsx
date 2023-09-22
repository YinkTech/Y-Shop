import React from "react";
import Category from "../components/Category";

const Trending = () => {
  return (
    <div className="mx-auto text-[#9d7765] max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h3 className="text-2xl font-bold text-center tracking-tight text-[#333]">
        Trending
      </h3>
      <Category />
    </div>
  );
};

export default Trending;
