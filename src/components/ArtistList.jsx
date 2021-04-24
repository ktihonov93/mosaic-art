import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchPlugin from "./SearchPlugin";
import LoadingSpinner from "./LoadingSpinner";
import ArtistCard from "./ArtistCard";

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
    artist && setFilteredArtists(
      artist.filter((artist) =>
      artist.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, artist]);

  return (
    <div>
      {!loading ? ( 
    <div>
      <h2>Artists</h2>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value.trim())}
      />
      <ul>
        {filteredArtists.map((artist) => <ArtistCard key={artist.id} artist={artist} />)}
      </ul>
    </div>
    ) : (
      <LoadingSpinner />
    )}
    </div>
  );
}
