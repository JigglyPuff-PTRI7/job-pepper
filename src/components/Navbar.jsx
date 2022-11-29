import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import logo from "../../public/assets/JobPepper_Logo.png";
import { Typography } from "@mui/material";

const Navbar = ({ user }) => {
  console.log("user in nav is =>", user);
  const logout = () => {
    window.open("http://localhost:3434/auth/logout", "_self");
  };

  return (
    <nav>
      <div id="navLeft">
        <Link to="/">
          {" "}
          <img src={logo} height="60px" />
        </Link>

        <span>
          <strong>JobPepper</strong>
        </span>
      </div>
      <div className="navbar-link-group">
        {/* if user is logged in, show logout button */}
        {user ? (
          <span className="navbar-link">
            <span>{user.user_name}</span>
            <span> | </span>
            <span class="navbar-link" onClick={logout}>
              Logout
            </span>
          </span>
        ) : (
          <span className="navbar-link">
            <Link to="/Login">Login</Link>
          </span>
        )}
        <span>|</span>
        <span className="navbar-link">
          <Link to="/Dashboard"> Dashboard</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
