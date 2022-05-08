import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const {
    price,
    productName,
    description,
    quantity,
    picture,
    supplierName,
    _id,
  } = product;
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 rounded shadow-2xl hover:drop-shadow-2xl duration-500 ease-in-out">
      <img className="w-48 mx-auto h-48" src={picture} alt="" />
      <div className="text-left leading-10 mt-2">
        <h2 className="text-2xl">{productName}</h2>
        <h2>Supplier : {supplierName}</h2>
        <p className="text-sm tracking-wider">{description}</p>
        <p>Price : ${price}</p>
        <p>Available : {quantity}</p>
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
