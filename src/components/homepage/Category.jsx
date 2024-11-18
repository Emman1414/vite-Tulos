import React from "react";
import CategItems from "./CategItems";

const Category = () => {
  const categoryArray = [
    {
      img: "card-7.png",
      name: "Man",
      text: "See Details",
    },
    {
      img: "card-8.png",
      name: "Woman",
      text: "See Details",
    },
    {
      img: "card-9.png",
      name: "Kids",
      text: "See Details",
    },
  ];
  return (
    <section className="Category py-10">
      <div className="container">
        <div className="wrap ">
          <div className="Category--card grid md:grid-cols-3 md:gap-3 gap-10 place-items-center">
            {categoryArray.map((item, key) => (
              <CategItems item={item} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
