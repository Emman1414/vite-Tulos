import React from "react";
import { Link } from "react-router-dom";
import { imgPath } from "../helpers/functions-general";

const CategItems = ({ item, key }) => {
  return (
    <div className="new-collection-card flex flex-col " key={key}>
      {/*IMAGE */}
      <div className="cardImage relative ">
        <img
          src={`${imgPath}/${item.img}`}
          alt=""
          className="md:w-[550px] w-full h-full md:h-[500px] rounded-3xl "
        />

        {/* Category Contents */}
        <div className=" absolute bottom-5 left-10">
          <h2 className="text-white uppercase font-semibold text-[30px] md:text-[60px]">{item.name}</h2>
          <button className="text-black bg-white border border-white rounded-2xl py-2 md:px-20 px-10  text-[15px] font-normal hover:border hover:bg-transparent hover:text-white">
            <Link to="/">{item.text}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategItems;
