import React from "react";
import Banner from "../Banner/Banner";
import HighLight from "../HighLight/HighLight";
import ManageInventory from "../ManageInventory/ManageInventory";
import Products from "../Products/Products";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner />
      <HighLight />
      <Products />
      <ManageInventory />
    </div>
  );
};

export default HomePage;
