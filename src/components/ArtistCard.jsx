import React from "react";
import { Link } from "react-router-dom";

export default function ArtistCard({ artist }) {
  return (
    <Link to={{ pathname: `/archive/artists/${artist.id}` }}>
      <div>
        <div>
          {artist.title && artist.title != null && artist.title !== undefined
            ? artist.title
            : "unknown"}
        </div>
        <div>
          {artist.birth_date ? artist.birth_date : "unknown"} -{" "}
          {artist.death_date ? artist.death_date : "unknown"}
        </div>
      </div>
    </Link>
  );
}
