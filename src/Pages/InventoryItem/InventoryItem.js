import React from "react";

const InventoryItem = ({ product }) => {
  const { price, picture, name, comment } = product;
  return (
    <>
      <tr className="border bg-slate-50">
        <td className="px-4 flex items-center">
          <img className="w-2/6 rounded m-2" src={picture} alt="" />
          <h2 className="text-gray-500">{name}</h2>
        </td>
        <td className="p-4 w-2/5 text-gray-600">{comment}</td>
        <td className="px-4 text-gray-600">${price}</td>
        <td className="px-4 text-gray-600">{name}</td>
        <td className="px-4">{price}</td>
        <td className="px-4">
          <button>update</button>
        </td>
      </tr>
    </>
  );
};

export default InventoryItem;
