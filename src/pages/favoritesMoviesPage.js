import React from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'

const FavoriteMoviesPage = props => {

  return (
    <PageTemplate
      movies={StubAPI.getAll()}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;