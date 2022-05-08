import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { MdUpdate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const InventoryItem = ({ product, handleProductDelete }) => {
  const { _id, price, picture, supplierName, description, quantity, category } =
    product;

  const navigate = useNavigate();

  return (
    <>
      <tr className="border bg-slate-50 text-center">
        <td className="px-4 mr-6 flex items-center">
          <img className="w-16 rounded m-2" src={picture} alt="" />
          <h2 className="text-gray-500">{supplierName}</h2>
        </td>
        <td className="p-4 text-gray-600">{description}</td>
        <td className="p-4 text-gray-600">{category}</td>
        <td className="px-4 text-gray-600">${price}</td>
        <td className="px-4 text-gray-600">{supplierName}</td>
        <td className="px-4">{quantity}</td>
        <td className="px-4 flex">
          <button onClick={() => navigate(`/inventory/${_id}`)}>
            <p title="update" className="mx-2 text-3xl">
              <MdUpdate />
            </p>
          </button>

          <button onClick={() => handleProductDelete(_id)}>
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
