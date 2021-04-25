import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import ArtworkCard from "./ArtworkCard";

export default function ArtworkList() {
    const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredArtworks, setFilteredArtworks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.artic.edu/api/v1/artworks")
      // Extract the DATA from the received response
      .then((res) => {
        setArtwork(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  useEffect(() => {
    artwork && setFilteredArtworks(
      artwork.filter((artwork) =>
      artwork.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, artwork]);
 
    return (
      <div>
        {!loading ? (      
        <div>
            <h2>Artworks</h2>
            <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value.trim())}
      />
      <ul>         
          {filteredArtworks.map((artwork) => <ArtworkCard key={artwork.id} artwork={artwork} />)}
      </ul>
        </div>
        ) : (
          <LoadingSpinner />
        )}
        </div>
    )
}
