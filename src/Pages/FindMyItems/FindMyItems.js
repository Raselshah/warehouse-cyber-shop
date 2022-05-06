import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Product from "../Product/Product";

const FindMyItems = () => {
  const [user] = useAuthState(auth);

  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/item?email=${email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setUserProducts(data);
        });
    };
    getProducts();
  }, [user]);

  return (
    <div className="grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-12 w-5/6 mx-auto gap-10">
      {userProducts.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default FindMyItems;
