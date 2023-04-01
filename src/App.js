import "./App.css";
import React from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Sign-up/Signup";
import { Route, Routes } from "react-router-dom";
import Navbari from "./components/Header/Header";
import About from "./components/About/About";
import Home from "./components/Home/Home";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
