import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const { authed, logout } = useAuth();
  const navigate = useNavigate();

    const handleLogout = () => {
      logout();
      navigate("/", { state: {authed: true}});
    }

  return (
    <>
      <Link to='/'>Login</Link><br/>
      <Link to='/Dashboard'>Dashboard ( Protected )</Link><br/>

   </>
  );
};

export default Navbar;

