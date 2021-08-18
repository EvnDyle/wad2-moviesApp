import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoriteTopRatedButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavoritesTopRated(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteTopRatedButton;