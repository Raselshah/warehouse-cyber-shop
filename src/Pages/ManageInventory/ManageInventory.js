import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InventoryItem from "../InventoryItem/InventoryItem";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://warm-journey-95440.herokuapp.com/home")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const navigate = useNavigate();

  const handleProductDelete = (id) => {
    const confirmUser = window.confirm("Delete this item are you sure?");
    if (confirmUser) {
      const url = `https://warm-journey-95440.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingProduct = products.filter((pd) => pd._id !== id);
          setProducts(remainingProduct);
        });
    }
  };

  return (
    <>
      <div className="max-w-screen-lg mt-12 mx-auto flex">
        <table className=" md:w-full mx-auto">
          <tr className="border bg-slate-200">
            <th className="text-slate-600 p-4">Product</th>
            <th className="text-slate-600 p-4">description</th>
            <th className="text-slate-600 p-4">Category</th>
            <th className="text-slate-600 p-4">Price </th>
            <th className="text-slate-600 p-4">Supplier </th>
            <th className="text-slate-600 p-4">Quantity </th>
            <th className="text-slate-600 p-4">Action </th>
          </tr>

          {products.map((product) => (
            <InventoryItem
              key={product._id}
              handleProductDelete={handleProductDelete}
              product={product}
            ></InventoryItem>
          ))}
        </table>
      </div>
      <button
        onClick={() => navigate("/add")}
        className="flex justify-center w-60 mx-auto px-12 py-2 mt-12 hover:bg-sky-700 hover:text-white text-gray-300 bg-white"
      >
        ADD NEW ITEMS
      </button>
    </>
  );
};

export default ManageInventory;
