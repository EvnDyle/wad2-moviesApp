import React from "react";
import SiteHeader from './components/siteHeader'
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>    {/* NEW */}
              <Switch>
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/" component={HomePage} />
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Redirect from="*" to="/" />
            </Switch>
            </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};
  
ReactDOM.render(<App />, document.getElementById("root"));