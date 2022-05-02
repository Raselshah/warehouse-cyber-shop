import React from "react";
import { useNavigate } from "react-router-dom";
import SocialLogIn from "../../Hooks/SocialLogIn/SocialLogIn";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-6">
      <h2 className="text-slate-800 text-3xl mt-12 text-center">
        Cyber Clinic
      </h2>
      <div className="logIn xs:w-5/6 md:w-5/6 lg:w-1/3 mx-auto flex flex-col bg-white p-12 mt-12">
        <h2 className="text-center m-4 text-2xl">Sign up for free!</h2>

        <SocialLogIn />

        <input
          className="p-3 border-b-2 mb-2 "
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          className="p-3 border-b-2 mb-2"
          type="text"
          name="name"
          id=""
          placeholder="Full name"
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
        <button className="bg-blue-400 py-3 text-lg mt-12 hover:bg-blue-500 text-white rounded">
          Signup with email
        </button>
        <button
          onClick={() => navigate("/login")}
          className="text-blue-500 mx-4 underline mt-4"
        >
          Already have an account?
        </button>
      </div>
    </div>
  );
};

export default SignUp;
