import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import ArtistCard from "./ArtistCard";
import "./ArtistList.css";

export default function ArtistList() {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredArtists, setFilteredArtists] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.artic.edu/api/v1/artists")
      // Extract the DATA from the received response
      .then((res) => {
        setArtist(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    artist &&
      setFilteredArtists(
        artist.filter((artist) =>
          artist.title.toLowerCase().includes(search.toLowerCase())
        )
      );
  }, [search, artist]);

  return (
    <div className="ArtistList-page">
      {!loading ? (
        <div>
          <h2>Artists</h2>
          <input
            class="search__input"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value.trim())}
          />
          <div className="ArtistList">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
