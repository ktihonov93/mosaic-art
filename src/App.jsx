import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/archive">
            <Archive />
          </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/">
            <Home />
        </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
