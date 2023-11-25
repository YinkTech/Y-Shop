import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeSelectedItem, selectedItem } from "../redux/actions/action";
import Nav from "./Nav";
import BestCollection from "../components/BestCollection";
import { Footer } from "./Footer";
import Subscribe from "./Subscribe";
import { BsChevronRight } from "react-icons/bs";
import StarRating from "./StarRating";
import loadingGif from "./../assets/img/loading.gif";
export const Details = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  // const item = useSelector((state) => state.selectedItemReducer);

  // useEffect(() => {
  //   const fetchDetail = async () => {
  //     try {
  //       if (id && id !== "") {
  //         const response = await axios.get(
  //           `https://dummyjson.com/products/${id}`
  //         );
  //         dispatch(selectedItem(response.data));
  //       }
  //     } catch (err) {
  //       console.error("Error:", err);
  //     }
  //   };

  //   if (id && id !== "") {
  //     fetchDetail();
  //   }

  //   return () => {
  //     dispatch(removeSelectedItem());
  //   };
  // }, [id, dispatch]);

  const item = useSelector((state) => state.selectedItemReducer);

  const dispatch = useDispatch();

  const fetchMarketDetail = async() => {
    const response = await axios
    .get(`https://dummyjson.com/products/${id}`)
    .catch((err) => {
      console.log("Err ", err);
    });
    dispatch (selectedItem(response.data));
  };

  useEffect(() => {
    if (id && id !== "" ) fetchMarketDetail();
    return () => {
      dispatch(removeSelectedItem());
    };
  }, [id])

  const imageIndex = item && item.images ? 0 : null;
  const imageIndex1 = item && item.images ? 1 : null;
  const imageIndex2 = item && item.images ? 2 : null;
  const imageIndex3 = item && item.images ? 3 : null;
  const imageIndex4 = item && item.images ? 4 : null;

  return (
    <div className="bg-[#fefdfd]">
      <div className="sm:px-14 p-2 mx-auto">
        <Nav />
      </div>
      {Object.keys(item).length === 0 ? (
        <div className=" flex flex-col justify-center items-center">
          <img src={loadingGif} className="" alt="loadingGif" />
          <h4>Please Wait</h4>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="bg-[#e5e5e5] p-2 flex items-center text-sm md:text-md gap-1">
            <Link to="/">Home</Link> <BsChevronRight className="p-1" />{" "}
            <Link to="/Shopping"> Shop </Link>
            <BsChevronRight className="p-1" /> {item.category}
            <BsChevronRight className="p-1" /> {item.title}
          </div>
          <div className="md:container mx-auto">
            <div className="flex flex-col md:flex-row gap-20 items-start justify-center">
              <div className="md:flex-1 w-full">
                <div className="h-[270px] md:h-[370px] w-full mx-auto" style={{background: `url(${item.thumbnail})`, backgroundPosition: 'center', backgroundSize: 'contain'}}>
                  
                </div>
                <div className="box-full">
                <div className="h-[150px] my-2 image-box-full">
                  {imageIndex !== null && item && item.images && (
                    <img loading="lazy" src={item.images[imageIndex]} alt="" />
                  )}
                  {imageIndex1 !== null && item && item.images && (
                    <img loading="lazy" src={item.images[imageIndex1]} alt="" />
                  )}
                  {imageIndex2 !== null && item && item.images && (
                    <img loading="lazy" src={item.images[imageIndex2]} alt="" />
                  )}
                  {imageIndex3 !== null && item && item.images && (
                    <img loading="lazy" src={item.images[imageIndex3]} alt="" />
                  )}
                  {imageIndex4 !== null && item && item.images && (
                    <img loading="lazy" src={item.images[imageIndex4]} alt="" />
                  )}
                </div></div>
              </div>
              <div className="md:flex-1 w-full">
                <div className="flex flex-col gap-5 p-4 md:p-4">
                  <h3 className="font-[700] text-[#323232] text-xl">
                    {item.title}
                  </h3>
                  <p className="text-[#868686]">{item.description}</p>
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-[#333333]"> Brand:</h3>
                    {item.brand}
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={item.rating} />
                    <span className="font-[500] text-[#75757a]">
                      ({item.rating})
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-[#333333]">
                    <b className="block">Price</b>
                    <div className=" p-2 flex shadow w-fit justify-center items-center gap-8">
                      <span className=" line-through">$ {item.price}</span>
                      <span className="">
                        ${" "}
                        {(
                          item.price -
                          (item.price * item.discountPercentage) / 100
                        ).toFixed(0)}
                      </span>
                      <span className="bg-[#eeb49db9] text-white text-sm p-1">
                        {" "}
                        -{item.discountPercentage}%{" "}
                      </span>
                    </div>
                  </div>

                  <button
                    className="w-fit font-[700] my-4 text-white p-2 px-4 bg-[#dabaad]"
                    style={{ borderRadius: "40px" }}
                  >
                    Order now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 my-20">
            <h3 className="text-center font-[700] text-xl"> For you </h3>
            <div>
              <BestCollection />
            </div>
          </div>
      <div>
        <Subscribe />
      </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};
