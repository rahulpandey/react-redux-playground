const API_KEY = "5bab8e18e6c0674ce8e50e8efd003e9f";
const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
export const REQUEST_MOVIES = "request_movies";
export const RECEIVE_MOVIES = "receive_movies";
function requestMovies() {
  return { type: REQUEST_MOVIES };
}
function receiveMovies(data = []) {
  return { type: RECEIVE_MOVIES, payload: data };
}

const fetchMovies = () => {
  return dispatch => {
    console.log("Fetch movies");

    dispatch(requestMovies());
    fetch(
      `${BASE_URL}/discover/movie?sort_by=popularity.desc &api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(res => dispatch(receiveMovies(res.results)));
  };
};

const selectMovie = movie => {
  console.log(movie.title);

  return {
    type: "MOVIE_CLICK",
    payload: movie
  };
};
export { selectMovie, fetchMovies };
