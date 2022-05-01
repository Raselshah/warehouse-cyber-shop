import React from "react";

const Product = ({ product }) => {
  const { price, picture, name } = product;
  return (
    <div className="bg-white p-4 max-w-xs">
      <img className="w-48 mx-auto h-72" src={picture} alt="" />
      <div className="text-center mt-5">
        <h2>{name}</h2>
        <p>${price}</p>

        <button className="rounded-full w-full bg-gray-200 p-2">Add now</button>
      </div>
    </div>
  );
};

export default Product;
