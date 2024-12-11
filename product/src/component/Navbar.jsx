import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-5 flex justify-between items-center">
      <h1 className="text-2x1 font-bold">Product</h1>
      <div>
        <Link to="/" className="mr-20 hover:underline">Product</Link>
        <Link to="/login" className="mr-20 hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
