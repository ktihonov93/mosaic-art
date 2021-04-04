import React from 'react'
import { Link } from "react-router-dom";

export default function Archive() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/archive/artist">Artist</Link>
                    </li>
                    <li>
                        <Link to="/archive/work">Work</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
