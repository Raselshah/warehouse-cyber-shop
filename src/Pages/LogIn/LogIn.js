import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogIn from "../../Hooks/SocialLogIn/SocialLogIn";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const handleEmailField = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handlePasswordField = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  console.log(email, password);
  const handleLogInButton = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="mb-6">
      <h2 className="text-blue-200 text-3xl mt-12 text-center">Cyber Clinic</h2>
      <div className="logIn xs:w-5/6 md:w-5/6 lg:w-1/3 mx-auto flex flex-col bg-white p-12 mt-12">
        <h2 className="text-center m-2 text-2xl">Login to your account</h2>
        <p className="text-center mb-4">
          Don’t have an account?
          <small>
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 mx-4 underline text-base"
            >
              Sign Up Now!
            </button>
          </small>
        </p>

        <SocialLogIn />

        <form onSubmit={handleLogInButton}>
          <input
            onBlur={handleEmailField}
            className="p-3 border-b-2 mb-2 w-full"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <input
            onChange={handlePasswordField}
            className="p-3 border-b-2 mb-2 w-full"
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />

          <Link
            className="justify-end flex m-4  text-blue-400 underline"
            to="/"
          >
            Forgot password?
          </Link>
          <button
            onClick={handleLogInButton}
            className="bg-blue-400 py-3 flex w-full justify-center mt-4 text-lg hover:bg-blue-500 text-white rounded"
          >
            Login with email
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
