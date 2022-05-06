import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const {
    picture,
    productName,
    category,
    quantity,
    supplierName,
    description,
    price,
  } = product;
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className=" mt-12 max-w-max mx-auto flex justify-center">
      <div className="bg-white p-4 rounded shadow-2xl">
        <img className="w-48 mx-auto h-48" src={picture} alt="" />
        <div className="text-center mt-5">
          <h2>
            <small className="mx-3 text-orange-500 text-lg">Name:</small>{" "}
            {productName}
          </h2>
          <h2>
            <small className="mx-3 text-orange-500 text-lg">Supplier:</small>{" "}
            {supplierName}
          </h2>
          <h2>
            <small className="mx-3 text-orange-500 text-lg">category:</small>{" "}
            {category}
          </h2>
          <p>
            <small className="mx-3 text-orange-500 text-lg">
              available in stock :
            </small>
            {quantity}
          </p>
          <p>
            <small className="mx-3 text-orange-500 text-lg">Price :$</small>
            {price}
          </p>

          <p>{description}</p>

          <button
            onClick={() => navigate("/add")}
            className="rounded-full w-full hover:bg-sky-700 hover:text-white bg-gray-200 p-2 mt-2"
          >
            DELIVERED
          </button>

          <button
            onClick={() => navigate("/add")}
            className="rounded-full w-full hover:bg-sky-700 hover:text-white bg-gray-200 p-2 mt-2"
          >
            ADD NEW ITEM
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
