import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogIn = () => {
  const [signInWithGoogle, googleUser, loading, error] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();
  if (googleUser) {
    navigate("/");
  }

  return (
    <>
      <div className="flex justify-around gap-4 mt-6">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-red-600 w-full flex justify-center items-center text-white text-lg py-2 rounded"
        >
          <small className="text-xl mx-2">
            <AiFillGoogleCircle />
          </small>
          <p>Google</p>
        </button>
        <button className="bg-slate-800 w-full flex justify-center items-center  text-white text-lg py-2 rounded">
          <small className="text-xl mx-2">
            <BsGithub />
          </small>
          <p>Github</p>
        </button>
      </div>

      <div className="flex justify-between mt-10 items-center mb-6">
        <div className="bg-gray-300 w-full h-1"></div>
        <p className="mx-4">Or</p>
        <div className="bg-gray-300 w-full h-1"></div>
      </div>
    </>
  );
};

export default SocialLogIn;
