import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import ArtworkCard from "./ArtworkCard";
import "./ArtworkList.css";

export default function ArtworkList() {
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredArtworks, setFilteredArtworks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.artic.edu/api/v1/artworks")
      .then((res) => {
        setArtwork(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    artwork &&
      setFilteredArtworks(
        artwork.filter((artwork) =>
          artwork.title.toLowerCase().includes(search.toLowerCase())
        )
      );
  }, [search, artwork]);

  return (
    <div>
      {!loading ? (
        <div className="ArtworkList-page">
          <h2>Artworks</h2>
          <input
          className="search__input"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value.trim())}
          />
          <div className="ArtworkList">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
