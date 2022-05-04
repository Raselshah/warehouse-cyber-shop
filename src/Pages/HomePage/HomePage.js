import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import HighLight from "../HighLight/HighLight";
import Products from "../Products/Products";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <HighLight />
        <Products />
      </div>

      <button
        className="flex justify-center w-60 mx-auto px-12 py-2 mt-12 hover:bg-sky-700 hover:text-white text-gray-300 bg-white"
        onClick={() => navigate("/inventory")}
      >
        MANAGE ITEMS
      </button>

      
    </>
  );
};

export default HomePage;
