import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <nav>
      <Route path="/Login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* if user is logged in, show logout button */}
    </nav>
  );
};

export default Navbar;
