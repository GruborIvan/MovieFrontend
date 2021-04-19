import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const MovieDetailsComponent = () => {
  let { id } = useParams(); // Get id of current movie.

  const [isLoading, setIsLoading] = useState(true);
  const [movie, SetMovie] = useState([]);

  const allMovies = useSelector((state) => state.movies);

  // eslint-disable-next-line
  let selectedMovie = allMovies.find((obj) => obj.id == id);

  useEffect(() => {
    if (allMovies.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      SetMovie(selectedMovie);
    }
  }, [allMovies, selectedMovie]);

  return (
    <div className="ui four column doubling stackable grid container">
      <div className="column" style={{ marginLeft: 400 }}>
        {isLoading === true ? (
          <Loader />
        ) : (
          <div style={{ marginTop: 30 }}>
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
            
              <p style={{float: "left"}}> Genre: </p> 
              {movie.genre.map(genre => {
                return <p key={genre.genre_name} style={{float: 'left', marginLeft: 10}}><b> {genre.genre_name} </b></p>
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsComponent;
