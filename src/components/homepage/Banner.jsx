import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const Banner = ({ img1, title, description }) => {
  return (
    <section className="Banner pb-[3.5rem] pt-[3.5rem]">
      <div className="container ">
        <div className="wrapper">
          <img
            src={`${imgPath}/${img1}`}
            alt=""
            className=" w-full rounded-3xl h-[85vh] md:h-screen object-cover relative"
          />
          <div className="banner__contents absolute flex flex-col md:flex-row md:justify-between bottom-10 md:left-20 items-start text-justify left-0 text-white w-[90vw] px-10">
            <div className="banner__text md:max-w-[1000px]">
              <h1 className="pb-1">{title}</h1>
              <p>{description}</p>
            </div>
            <button className="banner__btn my-5 md:my-0">
              <Link
                to="/"
                className="text-black bg-white py-2 px-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white"
              >
                Buy Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
