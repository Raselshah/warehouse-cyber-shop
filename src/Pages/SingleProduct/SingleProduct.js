import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const {
    _id,
    picture,
    productName,
    category,
    quantity,
    supplierName,
    description,
    price,
  } = product;

  const url = `https://warm-journey-95440.herokuapp.com/inventory/${id}`;
  const handleQuantity = (id) => {
    let q = quantity - 1;
    const newProduct = { ...product, quantity: q };
    setProduct(newProduct);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [quantity]);

  const [insertData, setInsertData] = useState({});
  const handleInsert = (event) => {
    const q = event.target.value;
    setInsertData(q);
  };
  const updateQuantity = (event) => {
    event.preventDefault();
    let q = parseInt(quantity) + parseInt(insertData);
    const newProduct = { ...product, quantity: q };
    setProduct(newProduct);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  return (
    <div className="mt-12 max-w-max mx-auto p-8 grid md:grid-cols-2 sm:grid-cols-1 justify-center">
      <div className="mt-5 flex justify-center items-center bg-white p-8">
        <img
          className="w-3/4 mx-auto shadow-lg duration-500 ease-in-out hover:drop-shadow-2xl"
          src={picture}
          alt=""
        />
      </div>
      <div className="mt-0 md:mt-5 mx-auto bg-white p-4">
        <h2>
          <small className=" text-orange-500 text-lg">Name:</small>{" "}
          {productName}
        </h2>
        <h2>
          <small className=" text-orange-500 text-lg">Supplier:</small>{" "}
          {supplierName}
        </h2>
        <h2>
          <small className=" text-orange-500 text-lg">category:</small>{" "}
          {category}
        </h2>
        <p>
          <small className="mr-2 text-orange-500 text-lg">
            available in stock :
          </small>
          {quantity}
        </p>
        <p>
          <small className="mr-2 text-orange-500 text-lg">Price :$ </small>
          {price}
        </p>

        <p>
          {" "}
          <small className="text-sky-500 text-lg">description :</small>{" "}
          {description}
        </p>

        <div className="flex flex-col">
          <button
            onClick={() => handleQuantity(_id)}
            className="rounded-full w-40 hover:bg-sky-700 hover:text-white bg-gray-200 p-2 mt-2"
          >
            DELIVERED
          </button>

          <button
            onClick={() => navigate("/add")}
            className="rounded-full w-40 hover:bg-sky-700 hover:text-white bg-gray-200 p-2 mt-2"
          >
            ADD NEW ITEM
          </button>

          <form
            className="mx-auto w-full flex flex-col justify-center"
            onSubmit={updateQuantity}
          >
            <input
              onBlur={handleInsert}
              className="mt-12 mx-auto p-2 border-b-2"
              type="number"
              name="insert"
              id=""
              placeholder="Quantity added"
            />

            <input
              onClick={updateQuantity}
              className="bg-sky-600 hover:bg-sky-700 hover:text-white w-44 mx-auto p-2 mt-2 cursor-pointer"
              type="submit"
              value="Update Quantity"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
