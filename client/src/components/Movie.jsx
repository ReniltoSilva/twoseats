import { useState, useEffect } from "react";
import axios from "axios";
import MyList from "../pages/MyList";

const Movie = ({ details, saveToDB }) => {
  const callSaveToDB = (title, thumbnail) => {
    const newMovie = {
      title,
      thumbnail,
    };

    saveToDB(newMovie);
  };

  return (
    <>
      <div className="movie_container" style={{ display: "flex" }}>
        <div className="thumbnail_container">
          <img
            src={`https://image.tmdb.org/t/p/w500${details.thumbnail}`}
            alt="movie_thumbnail"
            style={{ width: "120px" }}
          />
        </div>

        <div className="movie_details_container">
          <h4>{details.title}</h4>
          {details.button ? (
            ""
          ) : (
            <button
              onClick={() => callSaveToDB(details.title, details.thumbnail)}
            >
              Add to list
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Movie;
