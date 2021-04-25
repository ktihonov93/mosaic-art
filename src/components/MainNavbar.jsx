import React from 'react'
import { Link } from "react-router-dom";
import './MainNavbar.css'

export default function MainNavbar() {
    return (
        <div>
           <div className="container">
        <input id="toggle" type="checkbox" />
        <label className="toggle-container" htmlFor="toggle">
          <span className="button button-toggle"></span>
        </label>
            <nav className="nav">
              <Link to="/" className="nav-item">Home</Link>
              <Link to="/login" className="nav-item">Login</Link>
              <Link to="/archive/artists" className="nav-item">Archive</Link>
            <Link to="/about" className="nav-item">About</Link>
        </nav>
        </div>
        </div>
    )
}
