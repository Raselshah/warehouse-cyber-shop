import React, { useEffect, useState } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";

const ManageInventory = () => {
  // const [products] = AllData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-screen-lg mt-12 mx-auto flex">
      <table className=" md:w-full mx-auto">
        <tr className="border bg-slate-200">
          <th>Product</th>
          <th>Category</th>
          <th>Price </th>
          <th>Supplier </th>
          <th>Quantity </th>
          <th>Action </th>
        </tr>

        {products.map((product) => (
          <InventoryItem key={product._id} product={product}></InventoryItem>
        ))}
      </table>
    </div>
  );
};

export default ManageInventory;
