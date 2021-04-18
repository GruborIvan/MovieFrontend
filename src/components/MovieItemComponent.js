import React from 'react'
import {Link} from 'react-router-dom'

const MovieItemComponent = ({movie}) => {
    return (<div style={{width:300, marginBottom: 30}}>
        <Link to={'/movies/' + movie.id}>
        <div className="ui card" onClick={() => console.log(movie.id)}>
            <div className="image">
                <img src={movie.imageurl} alt="Img failed to load." style={{width: 280, height: 290, paddingLeft: 10, marginTop: 10}}/>
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