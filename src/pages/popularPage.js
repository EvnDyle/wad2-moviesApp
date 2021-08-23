import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddReviewButton from '../components/buttons/addReview'

const PopularPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.popular.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddReviewButton movie={movie} />;
      }}
    />
  );
};

export default PopularPage;