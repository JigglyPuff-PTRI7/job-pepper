import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import logo from '../../public/assets/JobPepper_Logo.png';
import { Typography } from "@mui/material";

const Navbar = () => {
  return (
    <nav>
      <div id="navLeft">
        <img src={logo} height="60px" />
        <span>
          <strong>JobPepper</strong>
        </span>
      </div>
      <div className="navbar-link-group">
        <span className="navbar-link">
          <Link to="/">Login</Link>
        </span>
        <span>|</span>
        <span className="navbar-link">
          <Link to="/Dashboard"> Dashboard</Link>
        </span>
        {/* if user is logged in, show logout button */}
      </div>
    </nav>
  );
};

export default Navbar;

