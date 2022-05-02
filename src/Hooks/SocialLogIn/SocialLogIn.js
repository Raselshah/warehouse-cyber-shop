import React from "react";

const SocialLogIn = () => {
  return (
    <>
      <div className="flex justify-around gap-4 mt-6">
        <button className="bg-red-600 w-full text-white text-lg py-2 rounded">
          Google
        </button>
        <button className="bg-slate-800 w-full text-white text-lg py-2 rounded">
          Github
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
