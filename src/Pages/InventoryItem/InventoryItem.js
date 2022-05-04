import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { MdUpdate } from "react-icons/md";

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
          <button className="mx-2">
            <p title="update" className="text-3xl">
              <MdUpdate />
            </p>
          </button>
          <button>
            <p title="Delete" className=" text-3xl">
              <TiDeleteOutline />
            </p>
          </button>
        </td>
      </tr>
    </>
  );
};

export default InventoryItem;
