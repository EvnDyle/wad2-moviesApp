import React from "react";
import Header from "../components/headerMovieList";
import MovieList from "../components/movieList";
import FilterControls from "../components/filterControls";

const MovieListPage = ({movies}) => {
  return (
    <>
      <Header numMovies={movies.length} />
      <FilterControls />
      <MovieList movies={movies} />
    </>
  );
};

export default MovieListPage;