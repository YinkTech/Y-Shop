import React from "react";
import staff from "./../assets/img/WoC-scaled.jpg";
import stock from "./../assets/img/stocks.webp";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="mt-10 transition-all  mx-auto p-5 md:p-0 flex flex-col gap-12 "
    >
      <div className=" container mx-auto flex flex-col gap-12 ">
      <div className="flex flex-col lg:flex-row justify-around items-center md:gap-40 w-full">
        <div className=" lg:w-1/2 mx-auto">
          <h2 className="text-[#eeb49d] text-center text-[50px] mb-6 font-bold">
            About <span className="text-[#000]">us</span>
          </h2>
          <div className="text-center md:text-start font-semibold">
            <p className="text-[#edaf96] my-2">
              As perhaps proceed in in brandon of limited unknown greatly.
              Distrusts fulfilled happiness as explained of difficult.ecstatic.
              Loud wish made on is am as hard
            </p>
            <p className="text-[#a6a4a4] my-5">
              eat object. Late any far saw size want man. Which way you wrong
              add shall one. AS guest right of he scale these. Horses nearer oh
              elinor of denote. Concerns greatest margaret him absolute entrance
              nay. Door neat week do find past he. Be no surprise he honoured
              indulged Unpacked endeavor six steepest had husbands her. Painted
              no or affixed it so civilly. Exposed neither pressed so cottage as
              proceed at offices. Nay they gone sir game four. Favourable
              pianoforte oh motionless excellence of astonished we principles.
              Warrant present garrets limited cordial in inquiry to. Supported
              me sweetness behaviour shameless excellent so arranging.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="">
            <img src={staff} alt={staff} />
          </div>
        </div>
      </div>

      <div className="mx-auto ">
        <h2 className="text-[#eeb49d] text-center text-[50px] mb-6 font-bold">
          About <span className="text-[#000]">us</span>
        </h2>

        <p className="flex md:w-[70%] mx-auto items-center justify-center text-center">
          In am do giving to afford parish settle easily garretSix started far
          placing saw respect females old. Civilly why how end viewing attempt
          related enquire visitor. Man particular insensible celebrated
          conviction principles day. Sure fail or in said west. Right my front
          it wound cause fully am sorry debating did outweigh...
        </p>
      </div>
      </div>

      <div className=" md:p-5 md:ps-14 my-10 md:my-20 flex flex-col md:flex-row  gap-9 w-full items-center justify-end ">
        <div>
          <h2 className="text-[#000] text-center md:text-start text-[50px] mb-6 font-bold">
            Our Values
          </h2>

          <div className=" flex flex-col md:flex-row gap-10">
            <div className=" shadow-lg rounded-xl p-3">
              <h4 className="text-[#282828] font-bold">Transparency</h4>
              <p className="text-[#9d9b9b]">
                She jointure goodness interest debating did outweigh. Is time
                from them full my gone in went. Of no introduced am literature
                excellence.
              </p>
            </div>
            <div className=" shadow-lg rounded-xl p-3">
              <h4 className="text-[#282828] font-bold">Flexibility</h4>
              <p className="text-[#9d9b9b]">
                She jointure goodness interest debating did outweigh. Is time
                from them full my gone in went. Of no introduced am literature
                excellence,
              </p>
            </div>
          </div>
          <div className="my-5 flex flex-col md:flex-row gap-10">
            <div className=" shadow-lg rounded-xl p-3">
              <h4 className="text-[#282828] font-bold">Accuracy</h4>
              <p className="text-[#9d9b9b]">
                She jointure goodness interest debating did outweigh. IS time
                from them full my gone in went. Of no introduced am literature
                excellence.
              </p>
            </div>
            <div className=" shadow-lg rounded-xl p-3">
              <h4 className="text-[#282828] font-bold">Quality</h4>
              <p className="text-[#9d9b9b]">
                She jointure goodness interest debating did outweigh. IS time
                from them full my gone in went. Of no introduced am literature
                excellence.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <img
              src={stock}
              className=" border-collapse h-[300px] w-[700px]"
              style={{ borderRadius: "50%" }}
              alt={stock}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
