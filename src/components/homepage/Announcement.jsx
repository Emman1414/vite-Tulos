import React from "react";

const Announcement = () => {
  return (
    <section className="Announcement bg-black text-white py-1 sticky top-0 z-10 ">
      <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
        <h2 className="text-[20px] font-normal">
          Get 25% Off This Summer Sale. Grab it Fast!!
        </h2>
        <h3 className="font-bold text-[20px]">15H :45M : 37S</h3>
      </div>
    </section>
  );
};

export default Announcement;
