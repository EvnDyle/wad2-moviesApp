import React, {useState, useEffect } from "react";
import Header from "../components/headerMovieList";
import MovieList from "../components/movieList";
import FilterControls from "../components/filterControls";

const MovieListPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
      )
        .then(res => res.json())
        .then(json => {
          console.log(json)
          return json.results
        })
        .then(movies => {
          setMovies(movies);
        });
    }, []);
    return (
    <>
      <Header numMovies={movies.length} />
      <FilterControls />
      <MovieList movies={movies} />
    </>
  );
};

export default MovieListPage;