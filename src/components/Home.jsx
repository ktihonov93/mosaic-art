import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayArt from "./components/DisplayArt";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Home() {
    const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(false);

  const getArt = async () => {
    await axios
      .get(
        "https://api.harvardartmuseums.org/object?apikey=8c76c33c-bdea-47fe-bac3-662ac7f085cc&sort=random"
      )
      // Extract the DATA from the received response
      .then((res) => {
        setArt(
          res.data.records[Math.floor(Math.random() * res.data.records.length)]
        );
        console.log(res.data.records.length);
      });
    setLoading(true);
    // Use this data to update the state
  };

  useEffect(() => {
    getArt();
  }, []);

  return (
    <div className="App">
      {loading ? <DisplayArt art={art} /> : <LoadingSpinner />}
      <button type="button" onClick={getArt}>
        Get art
      </button>
    </div>
  );
}

export default Home;