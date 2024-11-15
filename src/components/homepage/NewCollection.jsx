import React from "react";

const NewCollection = () => {
  const newCollectionArray = [
    {
      img: "card-1.png",
      name: "Loro Piana",
      text: "1Lorem ipsum dolor sit amet",
      price: "$52",
    },
    {
      img: "card-2.png",
      name: "Loro Piana",
      text: "2Lorem ipsum dolor sit amet",
      price: "$90",
    },
    {
      img: "card-3.png",
      name: "Loro Piana",
      text: "3Lorem ipsum dolor sit amet",
      price: "$52",
    },
    {
      img: "card-4.png",
      name: "Loro Piana",
      text: "4Lorem ipsum dolor sit amet",
      price: "$52",
    },
    {
      img: "card-5.png",
      name: "Loro Piana",
      text: "666Lorem ipsum dolor sit amet",
      price: "$89",
    },
    {
      img: "card-6.png",
      name: "Loro Piana",
      text: "666Lorem ipsum dolor sit amet",
      price: "$52",
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
        <div className=" grid gap-5"></div>
      </div>
    </section>
  );
};

export default NewCollection;
