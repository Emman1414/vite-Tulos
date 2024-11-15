import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const Banner = ({ img }) => {
  return (
    <section className="Banner relative">
      <div className="container ">
        <div className="wrapper">
          <img
            src={`${imgPath}/${img}`}
            alt=""
            className=" w-full rounded-3xl h-screen object-cover"
          />
          <div className="banner__contents absolute flex justify-between bottom-10 left-20 text-white w-[90vw] px-10">
            <div className="banner__text max-w-[1000px]">
              <h1 className="pb-1">Tolus Spring Collection</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem inventore deserunt delectus blanditiis saepe,
                temporibus deleniti laboriosam. Rerum odit explicabo eaque
                maiores nostrum, quam quod.
              </p>
            </div>
            <button className="banner__btn">
              <Link to="/" className="text-black bg-white py-2 px-4 rounded-lg font-semibold text-lg">
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
