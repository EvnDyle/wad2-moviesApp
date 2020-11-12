import React, {useState, useEffect}  from "react";
import MovieHeader from "../components/headerMovie";
import MovieDetails from "../components/movieDetails";
import "./moviePage.css";

const MoviePage = props => {
    const { id } = props.match.params
    const [movie, setMovie] = useState(null)
    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then(res => res.json())    
      .then(movie => {
        setMovie(movie);
      })
    }, [id])
  return (
    <>
      {movie ? (
        <>
          <MovieHeader movie={movie} />
          <div className="row">
            <div className="col-3">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : "./film-poster-placeholder.png"
                }
                className="movie"
                alt={movie.title}
              />
            </div>
            <div className="col-9">
              <MovieDetails movie={movie} />
            </div>
          </div>
        </>
        ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;