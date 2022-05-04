import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navmenu = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div
      style={{ background: "rgb(0, 50, 101)" }}
      className="flex justify-around items-center h-20"
    >
      <div className="logo-area">
        <h2 className="text-white text-3xl">Cyber Clinic</h2>
      </div>
      <div className="menu-area text-white">
        <Link className="px-5 text-lg" to="/home">
          Home
        </Link>

        {user ? (
          <>
            <Link className="px-5 text-lg" to="/manage">
              Manage Items
            </Link>
            <Link className="px-5 text-lg" to="/add">
              Add Item
            </Link>
            <Link className="px-5 text-lg" to="/items">
              My items
            </Link>
          </>
        ) : (
          ""
        )}

        {user ? (
          <Link onClick={handleLogOut} className="px-5 text-lg" to="/login">
            Log Out
          </Link>
        ) : (
          <Link className="px-5 text-lg" to="/login">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navmenu;
