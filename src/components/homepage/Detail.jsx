import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const Detail = ({ img2 }) => {
  return (
    <section className="detail py-10">
      <div className="container">
        <div className="detail--img">
          <img
            src={`${imgPath}/${img2}`}
            alt=""
            className="w-full object-cover rounded-3xl mb-10"
          />
        </div>
        <div className="details--contents text-center flex flex-col justify-center items-center mx-auto ">
          <h2 className=" text-[30px] md:text-[50px] font-bold mb-2">WEAR TO WEDDING</h2>
          <p className="opacity-70 text-[20px] mb-5">
            A symphony of exquisite designs tailored for your unforgettable
            moments
          </p>
          <button className="text-white bg-black rounded-2xl py-2 px-4  text-[20px] font-semibold border hover:border-black hover:bg-transparent hover:text-black ">
            <Link to="/">See Details</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Detail;
