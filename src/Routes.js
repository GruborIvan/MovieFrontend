import React from "react";
import { Switch, Route } from "react-router-dom";
import AddMovieComponent from "./components/AddMovieComponent";
import MovieListComponent from "./components/MovieListComponent";
import LogInComponent from "./components/LogInComponent";
import MovieDetailsComponent from "./components/MovieDetailsComponent";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LogInComponent} />
    <Route path="/movies/:id" component={MovieDetailsComponent}/>
    <Route path="/movies" component={MovieListComponent} />
    <Route path="/addmovie" component={AddMovieComponent} />
  </Switch>
);

export default Routes;