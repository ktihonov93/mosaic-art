import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Archive from "./components/Archive";
import About from "./components/About";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>        
        <MainNavbar />
        
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
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
