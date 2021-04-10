import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchPlugin from "./SearchPlugin";
//import Item from "./components/Item";
import LoadingSpinner from "./LoadingSpinner";
import ArtworkCard from "./ArtworkCard";

export default function ArtworkList() {
    const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    await axios
      .get("https://api.artic.edu/api/v1/artworks")
      // Extract the DATA from the received response
      .then((res) => {
        setArtwork(res.data.data);
      });
    setLoading(true);
    // Use this data to update the state
  };

  useEffect(() => {
    getList();
  }, []);

  const filterList = (text) => {
    let filteredList = artwork.filter(function (item) {
      return item.title.toLowerCase().search(text.toLowerCase()) !== -1;
    });
    setArtwork(filteredList);
  };
    return (
        <div>
            <h2>Artworks</h2>
            <SearchPlugin filter={filterList} />
      <ul>
        {loading ? (
          artwork.map((artwork) => <ArtworkCard key={artwork.id} artwork={artwork} />)
        ) : (
          <LoadingSpinner />
        )}
      </ul>
        </div>
    )
}
