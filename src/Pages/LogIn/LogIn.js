import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogIn from "../../Hooks/SocialLogIn/SocialLogIn";

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-6">
      <h2 className="text-blue-200 text-3xl mt-12 text-center">Cyber Clinic</h2>
      <div className="logIn w-1/3 mx-auto flex flex-col bg-white p-12 mt-12">
        <h2 className="text-center m-2 text-2xl">Login to your account</h2>
        <p className="text-center mb-4">
          Don’t have an account?
          <small>
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 mx-4 underline"
            >
              Sign Up Now!
            </button>
          </small>
        </p>

        <SocialLogIn />

        <input
          className="p-3 border-b-2 mb-2"
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          className="p-3 border-b-2 mb-2"
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <Link className="text-right m-4 text-blue-400 underline" to="/">
          Forgot password?
        </Link>
        <button className="bg-blue-400 py-3 text-lg hover:bg-blue-500 text-white rounded">
          Login with email
        </button>
      </div>
    </div>
  );
};

export default LogIn;
