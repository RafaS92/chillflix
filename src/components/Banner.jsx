import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header className="banner">
      <div className="banner_contents">
        <h1>
        {movie?title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
            <button className="banner_buttons">Play</button><button className="banner_buttons">My list</button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
