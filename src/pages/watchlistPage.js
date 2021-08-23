import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchlistPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.upcoming.filter((m) => m.watchlist);
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Your Watchlist"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchlistPage;