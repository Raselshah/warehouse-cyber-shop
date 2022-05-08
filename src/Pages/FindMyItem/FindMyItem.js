import React from "react";

const FindMyItem = ({ product, handleProductDelete }) => {
  const {
    price,
    quantity,
    description,
    productName,
    picture,
    supplierName,
    _id,
  } = product;

  return (
    <div className="bg-white p-4 rounded shadow-2xl hover:drop-shadow-2xl duration-500 ease-in-out">
      <img className="w-48 mx-auto h-48" src={picture} alt="" />
      <div className="text-left leading-8 mt-5">
        <h2>{productName}</h2>
        <h2>supplier : {supplierName}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <p>Available : {quantity}</p>
        <button
          onClick={() => handleProductDelete(_id)}
          className="rounded-full w-full hover:bg-sky-700 hover:text-white bg-gray-200 p-2 mt-2"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default FindMyItem;
