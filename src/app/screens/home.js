import React from "react";
import { Movies, Loader } from "../components";
import { selectMovie, fetchMovies } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { movieReducer } from "../reducers";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const { isLoading, movies, selectMovie } = this.props;
    let layoutContainer;
    if (isLoading) {
      layoutContainer = <Loader />;
    } else {
      layoutContainer = <Movies movies={movies} selectMovie={selectMovie} />;
    }
    return layoutContainer;
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.movieReducer.isLoading,
    movies: state.movieReducer.movies
  };
};
Home.propTypes = {
  movies: PropTypes.array,
  selectMovie: PropTypes.func,
  isLoading: PropTypes.bool
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchMovies: fetchMovies, selectMovie: selectMovie },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Home);
