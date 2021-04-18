import React, { useState, useEffect } from "react";
import axios from "axios";
import ArtworkCard from "./ArtworkCard";
import LoadingSpinner from "./LoadingSpinner";
const RelatedArtworkCards = ({artistArtwork}) => {
  //const artworkID = props.match.params.artwork_ids;
  console.log(artistArtwork);
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    await axios
      .get(`https://api.artic.edu/api/v1/artworks/${artistArtwork}`)
      // Extract the DATA from the received response
      .then((res) => {
        setArtwork(res.data.data);
      });
      setLoading(true);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div id="ItemDetails">
      {loading ? (
        <div>
<ArtworkCard key={artwork.id} artwork={artwork} />
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default RelatedArtworkCards;