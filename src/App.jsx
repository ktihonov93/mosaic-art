import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="content">
        <MainNavbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/archive/*" element={<Archive />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
