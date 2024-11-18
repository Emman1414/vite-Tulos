import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import NewCollection from "./NewCollection";
import Detail from "./Detail";
import Category from "./Category";
import Footer from "./Footer";
import Announcement from "./Announcement";

const Homepage = () => {
  return (
    <>
      <Announcement />
      <Header imgHead="headerlogo.png" />
      <Banner
        img1="banner.jpg"
        header="#"
        subheader="#"
        title="Tolus Spring Collection"
        description="Find out our best spring collection. Offering our best quality product in a Tolus Spring Collection."
      />
      <NewCollection />
      <Detail img2="secondbanner.png" />
      <Category />
      <Footer img3="footerlogo.png" submit="submit" />
    </>
  );
};

export default Homepage;
