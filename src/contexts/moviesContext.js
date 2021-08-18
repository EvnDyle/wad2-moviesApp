import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcoming, getTopRated } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true, watchlist: false} : m
        ),
        upcoming: [...state.upcoming],
        topRated: state.topRated.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true, watchlist: false } : m
        ),
      };
    case "add-favorite-top-rated":
      return {
        topRated: state.topRated.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true, watchlist: false } : m
        ),
        upcoming: [...state.upcoming],
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true, watchlist: false } : m
        ),
      };
    case "add-to-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true} : m
        ),
        movies: [...state.movies],
        topRated: [...state.topRated],
      }; 
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], topRated: [...state.topRated] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], topRated: [...state.topRated] };
    case "load-top-rated":
      return { topRated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], topRated: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToFavoritesTopRated = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-top-rated", payload: { movie: state.movies[index] } });
  };

  const addToWatchlist = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-to-watchlist", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcoming().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRated().then((movies) => {
      dispatch({ type: "load-top-rated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        topRated: state.topRated,
        addToFavorites: addToFavorites,
        addToFavoritesTopRated: addToFavoritesTopRated,
        addToWatchlist: addToWatchlist,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;