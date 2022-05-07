import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewItems = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    const url = `https://warm-journey-95440.herokuapp.com/add`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        if (product) {
          event.target.reset();
          toast("Successfully added item", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <div className="text-center mt-12">
      <h2>Please enter your new products</h2>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="flex flex-col mb-2 p-2 lg:w-1/3 mx-auto border-b-2 md:w-5/6"
          placeholder="Supplier Name"
          {...register("supplierName", { required: true, maxLength: 20 })}
        />
        <input
          className="flex flex-col mb-2 p-2 lg:w-1/3 mx-auto border-b-2 md:w-5/6"
          placeholder="Product Name"
          {...register("productName", { required: true, maxLength: 20 })}
        />
        <textarea
          className="flex flex-col mb-2 p-2 lg:w-1/3 mx-auto border-b-2 md:w-5/6"
          placeholder="description"
          {...register("description")}
        />
        <input
          className="flex flex-col mb-2 p-2 lg:w-1/3 mx-auto border-b-2 md:w-5/6"
          placeholder="category"
          {...register("category")}
        />
        <input
          className="flex flex-col mb-2 p-2 lg:w-1/3 mx-auto border-b-2 md:w-5/6"
          placeholder="photo url"
          {...register("picture")}
        />
        <input
          className="flex flex-col mb-2 p-2 lg:w-1/3 mx-auto border-b-2 md:w-5/6"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input
          className="flex flex-col mb-2 p-2 lg:w-1/3 mx-auto border-b-2 md:w-5/6"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="flex flex-col mb-2 p-2 lg:w-1/3 mx-auto border-b-2 md:w-5/6"
          readOnly
          value={user?.email}
          {...register("email")}
        />
        <input
          className="mt-2 bg-sky-600 hover:bg-sky-700 hover:text-white w-40 py-2 cursor-pointer rounded"
          value="SAVE DATA"
          type="submit"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddNewItems;
