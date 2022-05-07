import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import auth from "../../firebase.init";
import CustomLink from "../../Hooks/CustomLink/CustomLink";
import "./Navmenu.css";

const Navmenu = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      style={{ background: "rgb(0, 50, 101)" }}
      className="flex justify-around items-center h-20"
    >
      <h2 className="text-white text-3xl">Cyber Clinic</h2>
      <div
        className={`lg:flex block lg:static absolute duration-500 ease-in-out ${
          openMenu ? "top-16 w-full text-center bg-sky-500 p-3" : "top-[-200px]"
        }`}
      >
        <CustomLink className="px-5 text-lg" to="/home">
          Home
        </CustomLink>
        <CustomLink className="px-5 text-lg" to="/blog">
          Blogs
        </CustomLink>

        {user ? (
          <>
            <CustomLink className="px-5 text-lg" to="/inventory">
              Manage Items
            </CustomLink>
            <CustomLink className="px-5 text-lg" to="/add">
              Add Item
            </CustomLink>
            <CustomLink className="px-5 text-lg" to="/item">
              My items
            </CustomLink>
          </>
        ) : (
          ""
        )}

        {user ? (
          <CustomLink
            onClick={handleLogOut}
            className="px-5 text-lg"
            to="/login"
          >
            Log Out
          </CustomLink>
        ) : (
          <CustomLink className="px-5 text-lg" to="/login">
            Log In
          </CustomLink>
        )}
      </div>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="text-white text-2xl block lg:hidden"
      >
        {openMenu ? <ImCross /> : <AiOutlineMenu />}
      </button>
    </div>
  );
};

export default Navmenu;
