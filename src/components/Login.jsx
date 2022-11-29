import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

//use OAuth
//render a login-button that pops up a modal (MUI) options of using OAth or create an account

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const google = () => {
//this opens the googlelogin
    window.open("http://localhost:3434/auth/google","_self")

//after google login,we need to getthe user info from the db?Is the backend sending back user info from the db? or do we have to make a separate request ot search the db for our user info and activities?

//

//take the user info from the db,and update the user object,so dashboardis accessible


    // login().then(()=>{
    //   navigate("/dashboard")
    // })
  };

  return (
    <>
      <h1>Login</h1>
      {/** Turn into Google Button */}
      <button onClick={google}>Log in via Google</button>
    </>
  );
};

export default Login;
