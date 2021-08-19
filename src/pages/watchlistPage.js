import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import {MoviesContext} from '../contexts/moviesContext'

const WatchlistPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.upcoming.filter((m) => {  // New
    return m.watchlist && !("favorite" in m);
  });
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Your Watchlist"}
      action={movie => <AddToFavoritesButton movie={movie} />}
    />
  );
};

export default WatchlistPage;