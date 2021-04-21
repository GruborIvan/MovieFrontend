import React, { useMemo } from 'react'

const Pagination = ({ totalMovies, paginate }) => {

    const movieNums = useMemo(() => {
        let movieNumbers = [];
        for (let i = 1; i <= Math.ceil(totalMovies / 10); i++) { movieNumbers.push(i) }
        return movieNumbers;
    },[totalMovies])

    return (
        <div className="ui container segment" style={{width: 400}}>
        <ul style={{overflow: 'hidden'}}>
            {movieNums.map(number => (
                <li key={number} style={{float: 'left'}}>
                    <button className="ui secondary button" type="button" onClick={() => paginate(number)}> {number} </button>
                </li>
            ))}
        </ul>
        </div>
    );

}

export default Pagination;