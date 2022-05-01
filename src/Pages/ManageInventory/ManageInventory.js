import React from "react";
import AllData from "../../Hooks/AllData";
import InventoryItem from "../InventoryItem/InventoryItem";

const ManageInventory = () => {
  const [products] = AllData();
  return (
    <div className="max-w-screen-lg mt-12 mx-auto flex">
      <table>
        <tr className="border">
          <th>Product</th>
          <th>Category</th>
          <th>Price </th>
          <th>Supplier </th>
          <th>Quantity </th>
          <th>Action </th>
        </tr>

        {products.map((product) => (
          <InventoryItem key={product.id} product={product}></InventoryItem>
        ))}
      </table>
    </div>
  );
};

export default ManageInventory;
