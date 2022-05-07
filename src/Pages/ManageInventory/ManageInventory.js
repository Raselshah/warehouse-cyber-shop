import React, { useEffect, useState } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductDelete = (id) => {
    const confirmUser = window.confirm("Delete this item are you sure?");
    if (confirmUser) {
      const url = `http://localhost:5000/inventory/${id}`;
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
          <InventoryItem
            key={product._id}
            handleProductDelete={handleProductDelete}
            product={product}
          ></InventoryItem>
        ))}
      </table>
    </div>
  );
};

export default ManageInventory;
