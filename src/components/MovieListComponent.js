import React from 'react'
import { useSelector } from 'react-redux';
import MovieItemComponent from './MovieItemComponent';

const MovieListComponent = () => {

    const allMovies = useSelector(state => state.movies);

    console.log(allMovies)

    const allMoviesRendered = allMovies.map((movie) => {
        return <MovieItemComponent key={movie.id} movie={movie} />
    })

    return (
        <div>
            {allMoviesRendered}
        </div>
    );
};

export default MovieListComponent;