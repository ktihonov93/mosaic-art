import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

export default function ArtWorkDetails(props) {
    const artWorkID = props.match.params.id;
    console.log(artWorkID);
    const [artwork, setArtwork] = useState(null);
    const [loading, setLoading] = useState(false);
    const getArtwork = async () => {
        await axios
            .get(`https://api.artic.edu/api/v1/artworks/${artWorkID}`)
            // Extract the DATA from the received response
            .then((res) => {
                setArtwork(res.data.data);
            });
        setLoading(true);
    };
    useEffect(() => {
        getArtwork();
        // Use this data to update the state
    }, [artWorkID]);
    return (
        <div>
            {loading ? (
                <div>
                    <div>
        <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg
      `} alt={artwork.title && artwork.title != null && artwork.title !== undefined
              ? artwork.title : "unknown"}/>          
        </div>
        <div>
          {artwork.title && artwork.title != null && artwork.title !== undefined
            ? artwork.title : "unknown"}          
        </div>
        <div>
          {artwork.artist_title && artwork.artist_title != null && artwork.artist_title !== undefined
            ? artwork.artist_title
            : "unknown"}
        </div>
                </div>
            ) : (
                <LoadingSpinner />
            )}

        </div>
    )
}
