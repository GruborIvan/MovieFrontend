import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./extras/Loader";
import {
  genreSelector,
  moviesSelector,
} from "../store/selectors/MovieSelector";
import { DetailsVisit } from "../store/actions";
import CommentsComponent from "./extras/CommentsComponents";

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
    <div className="ui four column doubling stackable grid container raised segment" style={{overflow: "hidden"}}>
      <div className="column" style={{ marginLeft: 100, float: "left" }}>
        {isLoading === true ? (
          <Loader /> ) : 
          (
          <div style={{ marginTop: 20, overflow: "hidden"}}>
            <div>
              <img src={movie.imageurl} alt="Pic unavailable, sorry!" className="ui medium rounded image"/>
            </div>
            <div style={{marginLeft: 25,marginTop: 20}}>
              <h2> {movie.title} </h2>
              <p> <b> Description: </b> {movie.description}{" "} </p>
              
              <div style={{ overflow: "hidden" }}>
                <p style={{ float: "left"}}> Genre: </p>
                {genresRendered}
              </div>
            </div>
          </div>
          )
        }

      </div>
      <div style={{float: "left"}}>
        <div className="ui small raised segment" style={{width:240, marginTop: 32,marginLeft: 40}}>
          <div style={{ backgroundColor: "green",width:160 }}>
            <i className="hand point up icon"></i>
            {movie.likes}
          </div>
          <div style={{ backgroundColor: "red",width:160 }}>
            <i className="hand point down icon"></i>
            {movie.dislikes}
          </div>
          <h5> Number of details page visits: {movie.number_of_page_visits} </h5>
        </div>
        <CommentsComponent movieId={selectedMovie.id}/>
      </div>
    </div>
  );
};

export default MovieDetailsComponent;
