import React from 'react'

const MovieItemComponent = ({movie}) => {
    return (
        <div className="ui card">
            <div className="image">
                <img src={movie.imageurl} alt="Img failed to load."/>
            </div>
            <div className="content">
                {movie.title}
                <div className="description">
                    {movie.description}
                </div>
            </div>
        </div>
    );
};

export default MovieItemComponent;