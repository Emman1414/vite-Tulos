import React from "react";
import CardItems from "./CardItems";

const NewCollection = () => {
  const newCollectionArray = [
    {
      img: "card-1.png",
      name: "Loro Piana",
      text: "Slim-Fit Striped Silk and Linen-Blend Polo Shirt",
      price: "$52",
    },
    {
      img: "card-2.png",
      name: "White Pants",
      text: "Slim Fit Man Pants",
      price: "$90",
    },
    {
      img: "card-3.png",
      name: "Bhida Glasses",
      text: "Black Glasses with Luxury Finishing",
      price: "$50",
    },
    {
      img: "card-4.png",
      name: "Brown Bomber",
      text: "Luxury Unisex Bomber Jacket",
      price: "$52",
    },
    {
      img: "card-5.png",
      name: "Leather Shoes Jack",
      text: "Man Leather Shoes",
      price: "$89",
    },
    {
      img: "card-6.png",
      name: "Grey Tshirt",
      text: "Unisex grey tshirt",
      price: "$21",
    },
  ];

  return (
    <section className="NewCollection py-10">
      <div className="container">
        <div className="title flex flex-col text-center justify-center items-center">
          <h1 className="uppercase">New Collection</h1>
          <h6 className="opacity-60">
            Our Latest Collection, where classic and contemporary styles
            converge in perfect harmony
          </h6>
        </div>

        {/* CONTENTS */}
        <div className="grid md:grid-cols-3 gap-5 place-items-center py-10">
          {newCollectionArray.map((item, key) => (
            <CardItems item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
