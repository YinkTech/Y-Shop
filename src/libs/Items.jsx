import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

const Items = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const lists = useSelector((state) => state.itemReducer.items);
  const rederList = lists.map((item) => {
    const { id, title, description, price, rating, brand, category, images } =
      item;
    return (
      <div
      data-aos-easing="linear"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="group relative bg-white transition-all shadow hover:shadow-2xl rounded-2xl"
        key={id}
      >
        <div
          className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 h-52"
          style={{
            borderRadius: " 1rem 1rem  0rem 0rem",
            background: `url(${images[0]})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        ></div>
        <div className=" p-3 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="https://google.com">
                <span aria-hidden="true" className="absolute inset-0"></span>
                <b className="text-xl">{title}</b>
                <b className="block text-sm">
                  {" "}
                  {brand}, {category}
                </b>
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
            <div className="flex justify-between">
              <b className="mt-1 block text-xl text-[#000]">${price}</b>
            </div>
          </div>
          <div>
            <b className="mb-6 block text-md text-[#ffc500]">{rating}</b>
            <div
              className="bg-[#eeb49d] p-3 rounded-lg text-left "
              style={{ width: "fit-content" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="#fff"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{rederList}</>;
};

export default Items;
