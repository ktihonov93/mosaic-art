import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";
import "./ArtworkDetails.css";

export default function ArtWorkDetails() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const getArtwork = async () => {
    await axios
      .get(`https://api.artic.edu/api/v1/artworks/${id}`)
      .then((res) => {
        setArtwork(res.data.data);
      });
    setLoading(true);
  };
  useEffect(() => {
    getArtwork();
  }, [id]);

  const getDescription = () => {
    axios
      .get(`https://api.artic.edu/api/v1/artworks/${id}/manifest.json`)
      .then((res) => {
        setDescription(res.data.description[0].value);
      });
  };
  useEffect(() => {
    getDescription();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="ArtworkDetails">
          <div>
            <img
              className="artwork-img"
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
          </div>
          <div className="artwork-title">
            {artwork.title &&
            artwork.title != null &&
            artwork.title !== undefined
              ? artwork.title
              : "unknown"}
          </div>
          <div className="artwork-artist-title">
            {artwork.artist_title &&
            artwork.artist_title != null &&
            artwork.artist_title !== undefined
              ? artwork.artist_title
              : "unknown"}
          </div>
          <div className="artwork-date-display">
            {artwork.date_display &&
            artwork.date_display != null &&
            artwork.date_display !== undefined
              ? artwork.date_display
              : "unknown"}
          </div>
          <div className="favorite" onClick={handleFavoriteClick}>
            {isFavorite ? "♥️" : "♡"}
          </div>
          <div className="main-text">
            <div>{description}</div>
            {artwork.artist_title &&
              artwork.artist_title != null &&
              artwork.artist_title !== undefined && (
                <div>
                  Artist{" "}
                  <Link
                    to={{ pathname: `/archive/artists/${artwork.artist_id}` }}
                  >
                    {artwork.artist_title}
                  </Link>{" "}
                </div>
              )}

            <div>
              {artwork.title &&
                artwork.title != null &&
                artwork.title !== undefined &&
                "Title " + artwork.title}
            </div>
            <div>
              {artwork.place_of_origin &&
                artwork.place_of_origin != null &&
                artwork.place_of_origin !== undefined &&
                "Origin " + artwork.place_of_origin}
            </div>
            <div>
              {artwork.date_display &&
                artwork.date_display != null &&
                artwork.date_display !== undefined &&
                "Date " + artwork.date_display}
            </div>
            <div>
              {artwork.medium_display &&
                artwork.medium_display != null &&
                artwork.medium_display !== undefined &&
                "Medium " + artwork.medium_display}
            </div>

            {artwork.inscriptions &&
              artwork.inscriptions != null &&
              artwork.inscriptions !== undefined && (
                <div>"Inscriptions " {artwork.inscriptions}</div>
              )}

            <div>
              {artwork.dimensions &&
                artwork.dimensions != null &&
                artwork.dimensions !== undefined &&
                "Dimensions " + artwork.dimensions}
            </div>
            <div>
              {artwork.credit_line &&
                artwork.credit_line != null &&
                artwork.credit_line !== undefined &&
                "Credit Line " + artwork.credit_line}
            </div>
            <div>
              {artwork.main_reference_number &&
                artwork.main_reference_number != null &&
                artwork.main_reference_number !== undefined &&
                "Reference Number " + artwork.main_reference_number}
            </div>
            {artwork.publication_history && (
              <div>
                {artwork.publication_history &&
                  artwork.publication_history != null &&
                  artwork.publication_history !== undefined &&
                  "Publication history " + artwork.publication_history}
              </div>
            )}
            {artwork.exhibition_history && (
              <div>
                <p>Exhibition history</p>
                {artwork != null && artwork.exhibition_history && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: artwork.exhibition_history,
                    }}
                  ></p>
                )}
              </div>
            )}
            {artwork.provenance_text && (
              <div>
                <p>Provenance</p>
                {artwork != null && artwork.provenance_text && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: artwork.provenance_text,
                    }}
                  ></p>
                )}
              </div>
            )}
            {artwork.sound_ids[0] && (
              <div>
                <p>Multimedia</p>
                <a
                  href={`https://www.artic.edu/assets/${artwork.sound_ids[0]}`}
                >
                  audio
                </a>
              </div>
            )}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
