import React from "react";

const InventoryItem = ({ product }) => {
  const { price, picture, name, comment } = product;
  return (
    <>
      <tr className="border">
        <td className="px-4">{name}</td>
        <td className="px-4 w-2/5">{comment}</td>
        <td className="px-4">${price}</td>
        <td className="px-4">{name}</td>
        <td className="px-4">{price}</td>
        <td className="px-4">
          <button>delete</button>
        </td>
      </tr>
    </>
  );
};

export default InventoryItem;
