import React from "react";
import Banner from "../Banner/Banner";
import HighLight from "../HighLight/HighLight";
import Products from "../Products/Products";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner />
      <HighLight />
      <Products />
    </div>
  );
};

export default HomePage;
