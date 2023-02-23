import React from "react";
import { Routes, Route } from "react-router-dom";
import ArchiveNavbar from "./ArchiveNavbar";
import ArtistList from "./ArtistList";
import ArtistDetails from "./ArtistDetails";
import ArtWorkDetails from "./ArtWorkDetails";
import ArtworkList from "./ArtworkList";

export default function Archive() {
  return (
    <>
      <ArchiveNavbar />
      <Routes>
        <Route path={"artists"} element={<ArtistList />} />
        <Route path={"artworks"} element={<ArtworkList />} />
        <Route path={"artists/:id"} element={<ArtistDetails />} />
        <Route path={"artworks/:id"} element={<ArtWorkDetails />} />
      </Routes>
    </>
  );
}
