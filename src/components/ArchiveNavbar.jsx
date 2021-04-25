import React from 'react'
import { Link } from "react-router-dom";
import "./ArchiveNavbar.scss";

export default function ArchiveNavbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/archive/artists">Artists</Link>
                    </li>
                    <li>
                        <Link to="/archive/artworks">Artworks</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
