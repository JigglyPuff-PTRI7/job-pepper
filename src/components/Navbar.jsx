import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <>
      <Link to='/'>-Login</Link><br/>
      <Link to='/Dashboard'> - Protected Page Dashboard</Link><br/>
      {/* if user is logged in, show logout button */}
   </>
  );
};

export default Navbar;

