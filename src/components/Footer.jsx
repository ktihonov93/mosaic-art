import React from "react";
import "./Footer.css";
import logoImg from "./logoImg.jpg"
import logoGif from "./logoGif.gif"

export default function Footer() {
  return (
    <footer>
    <div className="footer">
      <img src={logoImg} className="logo" alt="logo" />
      <img src={logoGif} className="logo" alt="logo" />
    </div>
    </footer>
  );
}
