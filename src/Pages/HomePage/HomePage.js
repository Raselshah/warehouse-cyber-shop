import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import HighLight from "../HighLight/HighLight";
import Products from "../Products/Products";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner />
      <HighLight />
      <Products />

      <button
        className="mx-auto w-full mt-12 hover:text-red-600"
        onClick={() => navigate("/manage")}
      >
        MANAGE ITEMS
      </button>
    </div>
  );
};

export default HomePage;
