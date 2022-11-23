import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

//use OAuth
//render a login-button that pops up a modal (MUI) options of using OAth or create an account

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login().then(()=>{
      navigate("/dashboard")
    })
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in</button>
    </>
  );
};

export default Login;
