import React from "react";
import { Switch, Route } from "react-router-dom";
import AddMovieComponent from "./components/AddMovieComponent";
import MovieListComponent from "./components/MovieListComponent";
import LogInComponent from "./components/LogInComponent";
import MovieDetailsComponent from "./components/MovieDetailsComponent";
import RegisterComponent from "./components/Auth/RegisterComponent";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import WatchListComponent from "./components/WatchListComponent";

const Routes = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={LogInComponent} />
    <Route path="/movies/:id" component={MovieDetailsComponent}/>
    <Route path="/movies" component={MovieListComponent} />
    <Route path="/addmovie" component={AddMovieComponent} />
    <Route path="/register" component={RegisterComponent} />
    <Route path="/watchlist" component={WatchListComponent} />
    <Route exact path='/unauthorized' component={LogInComponent} />
  </Switch>
);

export default Routes;