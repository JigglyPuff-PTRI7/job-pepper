import React from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar";
import "./stylesheets/app.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";
import { Paper } from "@mui/material";
export default function App() {
  return (
    <div className="app">
      <Container maxWidth="md">
        <Paper elevation={8} sx={{ padding:'30px' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Paper>
      </Container>
    </div>
  );
}
