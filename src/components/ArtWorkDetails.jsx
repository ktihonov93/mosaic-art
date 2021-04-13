import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

export default function ArtWorkDetails(props) {
    const artWorkID = props.match.params.id;
    console.log(artWorkID);
    const [artwork, setArtwork] = useState(null);
    const [description, setDescription] = useState(null);
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

    const getDescription = async () => {
        await axios
            .get(`https://api.artic.edu/api/v1/artworks/${artWorkID}/manifest.json`)
            // Extract the DATA from the received response
            .then((res) => {
                setDescription(res.data.description[0].value);
            });
        setLoading(true);
    };
    useEffect(() => {
        getDescription();
        // Use this data to update the state
    }, [artWorkID]);

    return (
        <div>
            {loading ? (
                <div>
                    <div>
        <img src={artwork!=null && artwork.image_id!=null && artwork.image_id !== undefined && `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg
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
        <div>
          {artwork.date_display && artwork.date_display != null && artwork.date_display !== undefined
            ? artwork.date_display
            : "unknown"}
        </div>
        {description}
        <div>
          {artwork.artist_title && artwork.artist_title != null && artwork.artist_title !== undefined
            && "Artist "+artwork.artist_title}
        </div>
        <div>
          {artwork.title && artwork.title != null && artwork.title !== undefined
            && "Title "+artwork.title}
        </div>
        <div>
          {artwork.place_of_origin && artwork.place_of_origin != null && artwork.place_of_origin !== undefined
            && "Origin "+artwork.place_of_origin}
        </div>
        <div>
          {artwork.date_display && artwork.date_display != null && artwork.date_display !== undefined
            && "Date "+artwork.date_display}
        </div>
        <div>
          {artwork.medium_display && artwork.medium_display != null && artwork.medium_display !== undefined
            && "Medium "+artwork.medium_display}
        </div>
        <div>
          {artwork.inscriptions && artwork.inscriptions != null && artwork.inscriptions !== undefined
            && "Inscriptions "+artwork.inscriptions}
        </div>
        <div>
          {artwork.dimensions && artwork.dimensions != null && artwork.dimensions !== undefined
            && "Dimensions "+artwork.dimensions}
        </div>
        <div>
          {artwork.credit_line && artwork.credit_line != null && artwork.credit_line !== undefined
            && "Credit Line "+artwork.credit_line}
        </div>
        <div>
          {artwork.main_reference_number && artwork.main_reference_number != null && artwork.main_reference_number !== undefined
            && "Reference Number "+artwork.main_reference_number}
        </div>
        <div>
          {artwork.publication_history && artwork.publication_history != null && artwork.publication_history !== undefined
            && "Publication history "+artwork.publication_history}
        </div>
        <div>
        <p>Exhibition history</p>
            {artwork != null && artwork.exhibition_history && (
            <p
              dangerouslySetInnerHTML={{
                __html: artwork.exhibition_history
              }}
            ></p>
          )}
        </div>
        <div>
            <p>Provenance</p>
            {artwork != null && artwork.provenance_text && (
            <p
              dangerouslySetInnerHTML={{
                __html: artwork.provenance_text
              }}
            ></p>
          )}
        </div>
        <p>Multimedia</p>
        <a name="идентификатор" href={`https://www.artic.edu/assets/${artwork.sound_ids[0]}`}>{`https://api.artic.edu/api/v1/sounds/${artwork.sound_ids[0]}/`.data.title}</a>
                </div>
            ) : (
                <LoadingSpinner />
            )}

        </div>
    )
}
