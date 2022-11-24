import React from "react";
import{ useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar";
import "./stylesheets/app.css";
import { Route, Routes, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { useLocation } from 'react-router-dom'

function RequireAuth({ authed, children }) {
  // const { authed } = useAuth();
  const location = useLocation();

  return authed === true ? (children) : (<Navigate to="/" replace state={{path:location.pathname}}/>);
}

export default function App() {
const[user, setUser]=useState(null)

  return (
    <div>
      <Navbar />
      <Routes>
        {/* pass setUser function  to Login component. the Login component will update the user variable with our user's name, activities, logged time, etc*/}
        <Route path="/" element={<Login setUser={setUser}/>} />
        <Route path="/dashboard" element={<RequireAuth authed={user}><Dashboard /></RequireAuth>} />
      </Routes>
    </div>
  );
}



