import React, { useEffect } from "react";
import { CatData } from "../components/Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div
      data-aos-easing="linear"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .15"
        transitionDuration={1500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className=" py-7"
      >
        {CatData.map((data, id) => {
          return (
            <div
              key={id}
              className="text-center sm:w-60 md:w-72 lg:w-80 xl:w-96 flex justify-center items-end"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.4)), url(${data.image})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px",
                height: "200px",
              }}
            >
              <div>
                <h4
                  className="font-bold capitalize text-white my-4"
                  style={{ letterSpacing: "0.2rem" }}
                >
                  {data.cat}
                </h4>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Category;
