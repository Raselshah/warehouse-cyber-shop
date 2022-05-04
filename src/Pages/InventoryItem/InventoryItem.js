import React from "react";

const InventoryItem = ({ product }) => {
  const { price, picture, supplierName, description, quantity, category } =
    product;
  return (
    <>
      <tr className="border bg-slate-50 text-center">
        <td className="px-4 flex items-center">
          <img className="w-16 rounded m-2" src={picture} alt="" />
          <h2 className="text-gray-500">{supplierName}</h2>
        </td>
        <td className="p-4 text-gray-600">{category}</td>
        <td className="px-4 text-gray-600">${price}</td>
        <td className="px-4 text-gray-600">{supplierName}</td>
        <td className="px-4">{quantity}</td>
        <td className="px-4">
          <button>update</button>
        </td>
      </tr>
    </>
  );
};

export default InventoryItem;
