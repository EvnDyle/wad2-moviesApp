import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies } from "../api/tmdb-api";

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  const addToFavorites = movieId => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      StubAPI.add(movies[index]);
      let newMoviesState = [...movies]
      newMoviesState.splice(index, 1);
      return newMoviesState;
    });
  };

  return (
      <PageTemplate
        title='Discover Movies'
        movies={movies}
        buttonHandler={addToFavorites}
      />
  );
};

export default MovieListPage;