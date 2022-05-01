import React from "react";
import { Link } from "react-router-dom";

const Navmenu = () => {
  return (
    <div
      style={{ background: "rgb(0, 50, 101)" }}
      className="flex justify-around items-center h-20"
    >
      <div className="logo-area">
        <h2 className="text-white">Cyber Clinic</h2>
      </div>
      <div className="menu-area text-white">
        <Link className="px-5 text-lg" to="/home">
          Home
        </Link>
        <Link className="px-5 text-lg" to="/manage">
          Manage Items
        </Link>
        <Link className="px-5 text-lg" to="/add">
          Add Item
        </Link>
        <Link className="px-5 text-lg" to="/items">
          My items
        </Link>
        <Link className="px-5 text-lg" to="/login">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navmenu;
