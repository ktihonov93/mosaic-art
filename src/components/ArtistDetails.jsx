import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedArtworkCards from "./RelatedArtworkCards";
import LoadingSpinner from "./LoadingSpinner";
const ArtistDetails = (props) => {
  const artistID = props.match.params.id;
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(false);

  const getArtist = async () => {
    await axios
      .get(`https://api.artic.edu/api/v1/artists/${artistID}`)
      // Extract the DATA from the received response
      .then((res) => {
        setArtist(res.data.data);
      });
    setLoading(true);
  };
  useEffect(() => {
    getArtist();
    // Use this data to update the state
  }, [artistID]);

  return (
    <div id="ItemDetails">
      {loading ? (
        <div>
          <h2>{artist != null && artist.title != null && artist.title}</h2>
          <p>
            {artist != null &&
              artist.alt_titles &&
              " Also known as " + artist.alt_titles.join(", ")}
          </p>
          <p>
            {artist != null &&
              artist.birth_date &&
              " Date of birth " + artist.birth_date}
          </p>
          <p>
            {artist != null &&
              artist.birth_place &&
              " Place of birth " + artist.birth_place}
          </p>
          <p>
            {artist != null &&
              artist.death_date &&
              " Date of death " + artist.death_date}
          </p>
          <p id="death_place">
            {artist != null &&
              artist.death_place &&
              " Place of death " + artist.death_place}
          </p>
          {artist != null && artist.description && (
            <p
              dangerouslySetInnerHTML={{
                __html: artist.description
              }}
            ></p>
          )}
            {artist.artwork_ids.map((artistArtwork) => (
        <RelatedArtworkCards
          key={artistArtwork}
          artistArtwork={artistArtwork}
        />
      ))}        
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ArtistDetails;
