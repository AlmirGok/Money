import React from "react";
import "./App.css";
import { Login } from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/home";
import AuthService from "./services/AuthServrice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login authService={new AuthService()} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
