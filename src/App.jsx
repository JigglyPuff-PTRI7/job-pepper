import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import "./stylesheets/app.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Paper } from "@mui/material";


export default function App() {

 // const user = false;

  const [user, setUser] = useState(null);

  useEffect(() => {
console.log('inside useEffect')
    const getUser = () => {
console.log('in getUser fxn');
      fetch("http://localhost:3434/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          console.log("response", response)
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {

          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const [sampleUserTemplate, setSampleUserTemplate] = useState({
    name: null,
    email: null,
    activities: [
      {
        activity:null,
        totalHours: null,
        loggedHours: null,
        goal: null,
        resources: null
      }
    ]
  });

  const [existingUser, setExistingUser] = useState({
    name: 'Tom',
    email: 'TomNook@Island.com',
    activities: [
      {
        activity: 'Practice Algos',
        totalHours: 3.75,
        loggedHours: [
          { hours: 1, date: 'date1' },
          { hours: 0.25, date: 'date2' },
          { hours: 0.5, date: 'date3' },
          { hours: 2, date: 'date4' },
        ],
        goal: 5,
        resources: null,
      },
      {
        activity: 'Read Tech News',
        totalHours: 3.5,
        loggedHours: [
          { hours: 0.25, date: 'date1' },
          { hours: 1, date: 'date2' },
          { hours: 0.5, date: 'date3' },
          { hours: 0.75, date: 'date4' },
        ],
        goal: 3,
        resources: [
          {
            resource_name: 'Medium',
            url: 'https://medium.com',
            date_added: 'date',
          },
          {
            resource_name: 'LeetCode',
            url: 'https://leetcode.com',
            date_added: 'date',
          },
        ],
      },
      {
        activity: 'Mock Interview',
        totalHours: null,
        loggedHours: null,
        goal: null,
        resources: null,
      },
    ],
  });


  return (
    <div className="app">
      <Container maxWidth="md">
        <Paper elevation={8}>
          <Navbar user = {user}/>
          <Container sx={{padding: '25px'}}>
            <Routes>
              <Route path="/" element={<Home />} />
               <Route path="/login" element={user ? <Navigate to="/" />:<Login />}
               />
               <Route path="/dashboard" element={user ? <Dashboard user={existingUser} setUser={setExistingUser} /> : <Navigate to="/Login" />}
               />
              {/* <Route
                path="/dashboard"
                element={
                  <Dashboard user={existingUser} setUser={setExistingUser} />
                }
              /> */}
            </Routes>
          </Container>
        </Paper>
      </Container>
    </div>
  );
}
