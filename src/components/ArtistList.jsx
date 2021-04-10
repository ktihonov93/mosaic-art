import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchPlugin from "./SearchPlugin";
//import Item from "./components/Item";
import LoadingSpinner from "./LoadingSpinner";
import ArtistCard from "./ArtistCard";

export default function ArtistList() {
  //const [items, setItems] = useState(data.items);
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    await axios
      .get("https://api.artic.edu/api/v1/artists")
      // Extract the DATA from the received response
      .then((res) => {
        setArtist(res.data.data);
      });
    setLoading(true);
    // Use this data to update the state
  };

  useEffect(() => {
    getList();
  }, []);

  const filterList = (text) => {
    let filteredList = artist.filter(function (item) {
      return item.title.toLowerCase().search(text.toLowerCase()) !== -1;
    });
    setArtist(filteredList);
  };

  return (
    <div>
      <h2>Artists</h2>
      <SearchPlugin filter={filterList} />
      <ul>
        {loading ? (
          artist.map((artist) => <ArtistCard key={artist.id} artist={artist} />)
        ) : (
          <LoadingSpinner />
        )}
      </ul>
    </div>
  );
}
