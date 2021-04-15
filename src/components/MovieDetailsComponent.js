import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Loader from './Loader';

const MovieDetailsComponent = () => {

    let { id } = useParams(); // Get id of current movie.

    const [isLoading, setIsLoading] = useState(true);
    const [movie, SetMovie] = useState([]);

    const allMovies = useSelector(state => state.movies);

    let selectedMovie = allMovies.find(obj => obj.id == id);

    useEffect(() => {

        if (allMovies.length === 0) {
            setIsLoading(true);
            console.log('1');
        }
        else {
            setIsLoading(false);
            console.log('2');
            SetMovie(selectedMovie);
        }
    }, [selectedMovie]);


    return (
        <div className="ui four column doubling stackable grid container">
            <div className="column">
                {
                    (isLoading === true)
                        ? <Loader />
                        : (<div style={{marginTop: 30}}>
                            <img src={movie.imageurl} alt="Pic unavailable, sorry!" className="ui big rounded image" />
                            <h2> {movie.title}  </h2>
                            <p> <b> Description: </b> {movie.description} </p>
                            <p> <b> Genre: </b> {movie.genre} </p>
                            </div>
                        )
                }
            </div>
        </div>
    );

}

export default MovieDetailsComponent;