import React from "react";
import { Link } from "react-router-dom";
import "./ArtworkCard.css";

export default function ArtworkCard({ artwork }) {
  return (
    <Link to={{ pathname: `/archive/artworks/${artwork.id}` }}>
      <div className="ArtworkCard">
        <img
          className="ArtworkCard-img"
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg
      `}
          alt={
            artwork.title &&
            artwork.title != null &&
            artwork.title !== undefined
              ? artwork.title
              : "unknown"
          }
        />
        <div className="ArtworkCard-description">
          <div className="ArtworkCard-title">
            {artwork.title &&
            artwork.title != null &&
            artwork.title !== undefined
              ? artwork.title
              : "unknown"}
            {artwork.date_display &&
            artwork.date_display != null &&
            artwork.date_display !== undefined
              ? ", " + artwork.date_display
              : ""}
          </div>
          <div className="ArtworkCard-artist_title">
            {artwork.artist_title &&
            artwork.artist_title != null &&
            artwork.artist_title !== undefined
              ? artwork.artist_title
              : "unknown"}
          </div>
        </div>
      </div>
    </Link>
  );
}
