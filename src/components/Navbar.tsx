import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      {/* if user is logged in, show logout button */}
    </nav>
  );
};

export default Navbar;
