import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import NewCollection from "./NewCollection";

const Homepage = () => {
  return (
    <>
      <Header />
      <Banner img="banner.jpg" header="#" subheader="#" />
      <NewCollection />
      <Footer />
    </>
  );
};

export default Homepage;
