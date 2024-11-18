import React from "react";
import { imgPath } from "../helpers/functions-general";

const CardItems = ({ item, key }) => {
  return (
    <div className="new-collection-card flex flex-col " key={key}>
      {/* Card IMAGE */}
      <div className="cardImage ">
        <img
          src={`${imgPath}/${item.img}`}
          alt=""
          className="w-[350px] h-[350px] rounded-3xl"
        />

        {/* Card TEXT */}
        <div className="text-black">
          <h2 className="text-[30px] font-semibold">{item.name}</h2>
          <p className="opacity-65">{item.text}</p>
          <h2 className="text-[25px] font-semibold">{item.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
