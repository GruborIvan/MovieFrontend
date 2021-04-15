import React from 'react'
import { useSelector } from 'react-redux';
import MovieItemComponent from './MovieItemComponent';

const MovieListComponent = () => {

    const allMovies = useSelector(state => state.movies);

    const allMoviesRendered = allMovies.map((movie) => {
        return <MovieItemComponent key={movie.id} movie={movie} />
    })

    return (
        <div style={{marginLeft: 50, marginTop: 40}}>
            {allMoviesRendered}
        </div>
    );
};

export default MovieListComponent;