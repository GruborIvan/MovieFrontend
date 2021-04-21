import React from "react";
import { Link } from "react-router-dom";
import LikeDislikeComponent from "./extras/LikeDislikeComponent";

const MovieItemComponent = ({ movie }) => {
  return (
    <div style={{ width: 300, marginBottom: 30, height: 400}}>
      <div className="ui card">
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
        <LikeDislikeComponent movieId={movie.id} />
      </div>
    </div>
  );
};

export default MovieItemComponent;
