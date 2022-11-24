import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

//use OAuth
//render a login-button that pops up a modal (MUI) options of using OAth or create an account

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const { authed,login,logout } = useAuth();
  console.log("auth is ", authed)
  const { state } = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    login().then(()=>{
      console.log("logged in")
      setUser(true);
      navigate( "/dashboard")
    //  navigate("/dashboard", { state: {authed}});
    })
  };

  const handleLogout = () => {
      logout();
      navigate("/", { state: {authed}});
    }
  return (
    <>
      <h1>Login</h1>
      <button onClick={ (e)=> handleLogin(e)}>Log in</button>
      {authed && <button onClick={handleLogout}>Logout</button>}

    </>
  );
};

export default Login;
