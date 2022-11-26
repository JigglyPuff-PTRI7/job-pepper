import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import logo from '../../public/assets/JobPepper_Logo.png';
import { Typography } from "@mui/material";

const Navbar = ({user}) => {
  return (
    <nav>
      <div id="navLeft">
       <Link to="/"> <img src={logo} height="60px" /></Link>

        <span>
          <strong>JobPepper</strong>
        </span>
      </div>
      <div className="navbar-link-group">
        {/* if user is logged in, show logout button */}
        {
          user ? ( <span className="navbar-link"> <span>John Doe</span>
          <span> | </span>
          <Link to="/Logout">Logout</Link>
        </span>) : (
          <span className="navbar-link">
          <Link to="/Login">Login</Link>
        </span>
          )
        }
        <span>|</span>
        <span className="navbar-link">
          <Link to="/Dashboard"> Dashboard</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

