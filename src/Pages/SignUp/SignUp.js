import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialLogIn from "../../Hooks/SocialLogIn/SocialLogIn";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  useEffect(() => {
    if (user) {
      toast("Successfully Signup", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      toast("opps! invalid email or password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);
  const handleEmailBtn = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handlePasswordBtn = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  const handleEmailPassSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="mb-6">
      <h2 className="text-slate-800 text-3xl mt-12 text-center">
        Cyber Clinic
      </h2>
      <div className="logIn xs:w-5/6 md:w-5/6 lg:w-1/3 mx-auto flex flex-col bg-white p-12 mt-12">
        <h2 className="text-center m-4 text-2xl">Sign up for free!</h2>

        <SocialLogIn />

        <form onSubmit={handleEmailPassSubmit}>
          <input
            onBlur={handleEmailBtn}
            className="p-3 border-b-2 mb-2 w-full"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <input
            className="p-3 border-b-2 mb-2 w-full"
            type="text"
            name="name"
            id=""
            placeholder="Full name"
            required
          />
          <input
            onChange={handlePasswordBtn}
            className="p-3 border-b-2 mb-2 w-full"
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />

          <button
            onClick={handleEmailPassSubmit}
            className="bg-blue-400 py-3 text-lg mt-12 hover:bg-blue-500 text-white w-full rounded"
          >
            Signup with email
          </button>
        </form>
        <button
          onClick={() => navigate("/login")}
          className="text-blue-500 mx-4 underline mt-4"
        >
          Already have an account?
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
