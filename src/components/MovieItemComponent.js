import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddToMovieList } from "../store/actions";
import LikeDislikeComponent from "./extras/LikeDislikeComponent";

const MovieItemComponent = ({ movie }) => {

  const dispatch = useDispatch()

  return (
    <div style={{ width: 300, height: 440}}>
      <div className="ui raised container segment card">
          <div style={{overflow: "hidden"}}>
            <div style={{float: "left"}}> 
              {movie.watched ? <p style={{marginTop: 12,marginLeft: 50, fontSize: 12}}> Watched! </p> 
              : <div> <button className="ui mini green button" style={{marginTop: 5,marginLeft: 15}}> Mark as watched </button> 
            </div>}
            </div>
            <div style={{float: "left"}}> 
              <button className="ui orange mini button" style={{marginTop: 5,marginLeft: 10}} onClick={() => dispatch(AddToMovieList(movie.id))}> 
                Add to Watchlist
                <i className="plus square icon"></i> 
              </button> 
            </div>
          </div>
        <Link to={"/movies/" + movie.id}>
          <div className="image">
            <img
              src={movie.imageurl}
              alt="Img failed to load."
              style={{
                width: 280,
                height: 290,
                paddingLeft: 10,
                marginTop: 10,
              }}
            />
          </div>
          <div className="content" style={{marginLeft: 15}}>
            {movie.title}
            <div className="description">{movie.description}</div>
          </div>
        </Link>

        <div style={{overflow: "hidden"}}>
          <div style={{float: "left",marginLeft: 40,marginTop: 5}}>
            <i className="eye icon"></i>
            <p> {movie.number_of_page_visits} </p>
          </div>
          <div style={{float: "left"}}>
            <LikeDislikeComponent movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItemComponent;
