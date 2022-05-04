import React from "react";

const AddNewItems = () => {
  return (
    <div>
      <form className="flex flex-col w-4/6 mx-auto gap-4 p-2 mt-12">
        <input type="text" name="sname" id="" placeholder="Supplier name" />
        <input type="text" name="pname" id="" placeholder="product name" />
        <textarea
          type="text"
          name="description"
          id=""
          placeholder="product info.."
        />
        <input type="number" name="price" id="" placeholder="price" />

        <button>Save</button>
      </form>
    </div>
  );
};

export default AddNewItems;
