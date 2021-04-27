import React from "react";
import { Link } from "react-router-dom";
import "./ArchiveNavbar.css";

export default function ArchiveNavbar() {
  return (
    <div className="ArchiveNavbar">
      <ul className="ArchiveNavbar-ul">
        <li className="ArchiveNavbarItems">
          <Link
            to="/archive/artists"
            data-title="Artists"
            className="ArchiveNavbarLinks"
          >
            Artists
          </Link>
        </li>
        <li className="ArchiveNavbarItems">
          <Link
            to="/archive/artworks"
            data-title="Artworks"
            className="ArchiveNavbarLinks"
          >
            Artworks
          </Link>
        </li>
      </ul>
    </div>
  );
}
