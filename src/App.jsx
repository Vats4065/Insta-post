import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import PrivaiteComponent from "./components/Private";
import Login from "./components/Login";
import Mypost from "./components/Mypost";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route element={<PrivaiteComponent />}>
          <Route exact path="/" element={<Home />}></Route>
        </Route>
        <Route exact path="/mypost" element={<Mypost />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
