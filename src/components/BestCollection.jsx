import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setItem } from "../redux/actions/action";
import Items from "../libs/Items";
import { Link } from "react-router-dom";

const BestCollection = () => {
  const dispatch = useDispatch();
  const fetchItem = async () => {
    const response = await axios
      .get("https://dummyjson.com/products?limit=6")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setItem(response.data.products));
  };

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(to bottom left, #fff, 80%, #eeb49d)",
        }}
      >
        <div className="px-3 mx-auto max-w-2xl px-4sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <Items />
          </div>
        </div>
      </div>
      <Link to={`/Shopping`}>
        <b className="text-[#000] my-5 block text-2xl underline decoration-[#eeb49d] text-center text-bold">
          {" "}
          View all
        </b>
      </Link>
    </div>
  );
};

export default BestCollection;
