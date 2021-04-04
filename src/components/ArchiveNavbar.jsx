import React from 'react'
import { Link } from "react-router-dom";

export default function ArchiveNavbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/archive/artists">Artists</Link>
                    </li>
                    <li>
                        <Link to="/archive/works">Works</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
