import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  // const [products] = AllData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-12 w-5/6 mx-auto gap-10">
      {products.slice(0, 6).map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
