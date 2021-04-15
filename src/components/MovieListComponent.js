import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import MovieItemComponent from './MovieItemComponent';
import Pagination from './Pagination';

const MovieListComponent = () => {

    // States..
    const [currentMovie,setCurrentMovie] = useState(1);
    const [moviesPerPage,setMoviesPerPage] = useState(4);

    const allMovies = useSelector(state => state.movies);

    // Get current posts..
    const indexOfLastMovie = currentMovie * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentPost = allMovies.slice(indexOfFirstMovie,indexOfLastMovie);

    const paginate = (movieNumber) => setCurrentMovie(movieNumber);

    const allMoviesRendered = currentPost.map((movie) => {
        return <MovieItemComponent key={movie.id} movie={movie} />
    })

    return (
        <div style={{margin: 40, marginLeft: 480}}>
            {allMoviesRendered}
            <br/>
            <Pagination moviesPerPage={moviesPerPage} totalMovies={allMovies.length} paginate={paginate} />
        </div>
    );
};

export default MovieListComponent;