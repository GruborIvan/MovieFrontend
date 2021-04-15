import React from 'react'

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {

    const movieNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        movieNumbers.push(i);
    }

    return (
        <div>
            <ul style={{overflow: 'hidden'}}>
                {movieNumbers.map(number => (
                    <li key={number} style={{float: 'left'}}>
                        <button className="ui secondary button" type="button" onClick={() => paginate(number)}> {number} </button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Pagination;