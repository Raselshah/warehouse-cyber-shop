import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { price, description, picture, supplierName, _id } = product;
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 rounded shadow-2xl max-w-xs">
      <img className="w-48 mx-auto h-72" src={picture} alt="" />
      <div className="text-center mt-5">
        <h2>{supplierName}</h2>
        <h2>{description.slice(0, 30) + "..."}</h2>
        <p>${price}</p>

        <button
          onClick={() => navigate(`/inventory/${_id}`)}
          className="rounded-full w-full hover:bg-sky-700 hover:text-white bg-gray-200 p-2 mt-2"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default Product;
