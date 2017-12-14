import React from "react";
import { IMAGE_BASE_URL } from "../actions";
import PropTypes from "prop-types";
const errorImagePath =
  "https://cdn-images-1.medium.com/max/1600/1*bcrPG2LR1GAG5VjEHB6PiA.gif";
const Movies = ({ movies, selectMovie }) => {
  return (
    <div className="grid">
      {movies.map((element, index) => {
        const imagePath =
          element.poster_path !== null
            ? `${IMAGE_BASE_URL}${element.poster_path}`
            : errorImagePath;
        return (
          <div className="row" key={index}>
            <a target="_blank" href={imagePath}>
              <img src={imagePath} width={260} height={376} />
            </a>
            <div className="desc">{element.title}</div>
          </div>
        );
      })}
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array,
  selectMovie: PropTypes.func
};

export default Movies;
