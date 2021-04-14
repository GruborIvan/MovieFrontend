import React from 'react'
import {Link} from 'react-router-dom'

const MovieItemComponent = ({movie}) => {
    return (<div style={{width:300}}>
        <Link to={'/movies/' + movie.id}>
        <div className="ui card" onClick={() => console.log(movie.id)}>
            <div className="image">
                <img src={movie.imageurl} alt="Img failed to load." style={{width: 260, height: 300}}/>
            </div>
            <div className="content">
                {movie.title}
                <div className="description">
                    {movie.description}
                </div>
            </div>
        </div>
        </Link>
        </div>
    );
};

export default MovieItemComponent;