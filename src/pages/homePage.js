import React, {useState, useEffect } from "react";
import Header from "../components/headerMovieList";
import MovieList from "../components/movieList";
import FilterControls from "../components/filterControls";
import StubAPI from "../api/stubAPI";

const MovieListPage = () => {
  const [titleFilter, setTitleFilter] = useState("");       // NEW
  const [genreFilter, setGenreFilter] = useState("0");      // NEW

  const [movies, setMovies] = useState([])
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

    const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return genre > 0 ? m.genre_ids.includes(Number(genreFilter)) : true;
    });

  const handleFilterChange = (type, value) => {
    if (type === "name") setTitleFilter(value);
    else setGenreFilter(value);
  };

  const addToFavorites = movieId => {
    // Find index position of selected movie in the list
    const index = movies.map(m => m.id).indexOf(movieId)

    StubAPI.add(movies[index])
    const updatedList = [...movies]  // Make a copy of the movie list
    updatedList.splice(index, 1)     // Remove selected movie from home page list
    setMovies(updatedList)  
  }


  return (
    <>
      <Header numMovies={displayedMovies.length} />
      <FilterControls onUserInput={handleFilterChange} />
      <MovieList
        movies={displayedMovies}
        buttonHandler={addToFavorites}
      />     {/* CHANGED */}
    </>
  );
};

export default MovieListPage;