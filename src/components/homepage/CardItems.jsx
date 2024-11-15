import React from "react";
import { imgPath } from "../helpers/functions-general";

const CardItems = ({ item, key }) => {
  return (
    <div className="new-collection-card flex flex-col px-4 " key={key}>
      {/* Card IMAGE */}
      <div className="cardImage ">
        <img src={`${imgPath}/${item.img}`} alt="" />
      </div>
      {/* Card TEXT */}
      <div className="text-black">
        <h2>{item.title}</h2>
        <p className="opacity-65">{text}</p>
        <h2>{item.price}</h2>
      </div>
    </div>
  );
};

export default CardItems;
