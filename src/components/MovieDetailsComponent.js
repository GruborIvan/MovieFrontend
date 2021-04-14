import React from 'react'
import { useParams } from 'react-router';

const MovieDetailsComponent = () => {
    
    let { id } = useParams();

    return (
        <div> 
            <h3> Showing a movie with ID: {id} </h3>
        </div>
    );

}

export default MovieDetailsComponent;