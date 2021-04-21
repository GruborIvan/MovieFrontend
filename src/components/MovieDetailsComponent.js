import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Loader from './extras/Loader'
import { genreSelector, moviesSelector } from "../store/selectors/MovieSelector";

const MovieDetailsComponent = () => {
  let { id } = useParams(); // Get id of current movie.

  const [isLoading, setIsLoading] = useState(true);
  const [movie, SetMovie] = useState([]);

  const allMovies = useSelector(moviesSelector);
  const allGenres = useSelector(genreSelector);

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

  //const genresRendered = movi

  console.log(selectedMovie.genre);

  const genresRendered = selectedMovie.genre.map(genreId => {
    let thisgenre = allGenres.filter(gnr => {return gnr.id === genreId})
    if (thisgenre[0]) {
      return <b key={thisgenre[0].id} style={{float: "left", marginLeft: 6}}>   {thisgenre[0].genre_name}   </b>
    }
    else {
      return <p></p>
    }

  });

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
              <div style={{overflow: "hidden"}}>
              {genresRendered}
              </div>
              
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsComponent;
