import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./extras/Loader";
import {
  genreSelector,
  moviesSelector,
} from "../store/selectors/MovieSelector";
import { DetailsVisit } from "../store/actions";

const MovieDetailsComponent = () => {
  let { id } = useParams(); // Get id of current movie.
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, SetMovie] = useState([]);

  const allMovies = useSelector(moviesSelector);
  const allGenres = useSelector(genreSelector);

  // eslint-disable-next-line
  let selectedMovie = allMovies.find((obj) => obj.id == id);

  useEffect(() => {
    dispatch(DetailsVisit(id)); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (allMovies.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      SetMovie(selectedMovie);
    }
  }, [allMovies, selectedMovie]);

  const genresRendered = selectedMovie.genre.map((genreId) => {
    let thisgenre = allGenres.find((genre) => { return genre.id === genreId });
    if (thisgenre) {
      return (
        <b key={thisgenre.id} style={{ float: "left", marginLeft: 6 }}>
          {" "}
          {thisgenre.genre_name}{" "}
        </b>
      );
    } else {
      return <p></p>;
    }
  });

  return (
    <div className="ui four column doubling stackable grid container">
      <div className="column" style={{ marginLeft: 400 }}>
        {isLoading === true ? (
          <Loader />
        ) : (
          <div style={{ marginTop: 20 }}>
            <img
              src={movie.imageurl}
              alt="Pic unavailable, sorry!"
              className="ui medium rounded image"
            />
            <h2> {movie.title} </h2>
            <p>
              {" "}
              <b> Description: </b> {movie.description}{" "}
            </p>

            <p style={{ float: "left" }}> Genre: </p>
            <div style={{ overflow: "hidden" }}>{genresRendered}</div>
          </div>
        )}

        <div className="ui small raised container segment">
          <div style={{ backgroundColor: "green" }}>
            <i className="hand point up icon"></i>
            {movie.numberOfLikes}
          </div>
          <div style={{ backgroundColor: "red" }}>
            <i className="hand point down icon"></i>
            {movie.numberOfDislikes}
          </div>
          <h5> Number of details page visits: {movie.numberOfPageVisits} </h5>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsComponent;
