import React, { useState, useEffect } from "react";
import axios from "./axios";
import Youtube from "react-youtube";
import { API_KEY } from "./requests";

function Trailer() {
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get();
      console.log(request);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <div></div>;
}

export default Trailer;
