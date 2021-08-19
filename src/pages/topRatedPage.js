import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddReviewButton from '../components/buttons/addReview'

const TopRatedPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.topRated.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddReviewButton movie={movie} />;
      }}
    />
  );
};

export default TopRatedPage;