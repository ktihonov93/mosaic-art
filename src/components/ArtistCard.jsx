import React from "react";
import { Link } from "react-router-dom";
import "./ArtistCard.css";

export default function ArtistCard({ artist }) {
  return (
    <Link to={{ pathname: `/archive/artists/${artist.id}` }}>
      <div className="ArtistCard">
        <div className="artist-title">
          {artist.title && artist.title != null && artist.title !== undefined
            ? artist.title
            : "unknown"}
        </div>
        <div className="artist-birth-death-date">
          {artist.birth_date ? artist.birth_date : "?"} -{" "}
          {artist.death_date ? artist.death_date : "?"}
        </div>
      </div>
    </Link>
  );
}
