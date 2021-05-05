import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./extras/Loader";
import { genreSelector, moviesSelector } from "../store/selectors/MovieSelector";
import { DetailsVisit } from "../store/actions";
import CommentsComponent from "./extras/CommentsComponents";
import MoviesSidebar from "./movieExtras/MoviesSidebar";

const MovieDetailsComponent = () => {

  let { id } = useParams(); // Get id of current movie.
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, SetMovie] = useState([]);

  const allMovies = useSelector(moviesSelector);
  const allGenres = useSelector(genreSelector); // eslint-disable-next-line
  let selectedMovie;

  allMovies.forEach(movie => {
    // eslint-disable-next-line
    if (movie.movie && movie.movie.id == id) {
      movie.movie.watched = movie.watched
      console.log(movie.movie.watched)
      selectedMovie = movie.movie;
    }
  });


  if (selectedMovie === undefined) {    // eslint-disable-next-line
    selectedMovie = allMovies.find((obj) => obj.id == id);
  }

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
  }, [allMovies, selectedMovie,id]);

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
    <div style={{backgroundColor: "black"}}>
    <div className="ui four column doubling stackable grid container raised segment" style={{overflow: "hidden",marginLeft: 110,float: "left", width: 200}}>
      <div className="column" style={{ marginLeft: 100, float: "left" }}>
        {isLoading === true ? (
          <Loader /> ) : 
          (
          <div style={{ marginTop: 20, overflow: "hidden"}}>
            
            <div style={{backgroundColor: 'lightblue'}}>
            <h5> You have alredy watched this movie! </h5>
            </div>
            <img src={movie.imageurl} alt="Pic unavailable, sorry!" className="ui medium rounded image"/>
        
            <div style={{marginLeft: 25,marginTop: 20,backgroundColor: "azure"}}>
              <h1> {movie.title} </h1>
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
        <div style={{width:240, marginTop: 32,marginLeft: 40, backgroundColor: "azure"}} className="ui small raised segment">
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
      <div style={{float: "left"}}>
        <MoviesSidebar genre={selectedMovie.genre[0]} currMovieId={selectedMovie.id}/>
      </div>
    </div>
  );
};

export default MovieDetailsComponent;
