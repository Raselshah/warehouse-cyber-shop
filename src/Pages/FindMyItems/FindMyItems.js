import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import FindMyItem from "../FindMyItem/FindMyItem";
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
          const remainingProduct = userProducts.filter((pd) => pd._id !== id);
          setUserProducts(remainingProduct);
        });
    }
  };

  return (
    <div className="grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-12 w-5/6 mx-auto gap-10">
      {userProducts.map((product) => (
        <FindMyItem
          key={product._id}
          handleProductDelete={handleProductDelete}
          product={product}
        ></FindMyItem>
      ))}
    </div>
  );
};

export default FindMyItems;
