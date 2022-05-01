import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 w-5/6 mx-auto gap-10">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <button className="mx-auto w-full mt-12">VIEW MORE PRODUCTS</button>
    </>
  );
};

export default Products;
