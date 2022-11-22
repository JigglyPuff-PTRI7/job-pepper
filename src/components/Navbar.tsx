import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <>
      <Link to='/'>Login</Link>
      <Link to='/Dashboard'>Dashboard</Link>
      {/* if user is logged in, show logout button */}
   </>
  );
};

export default Navbar;

