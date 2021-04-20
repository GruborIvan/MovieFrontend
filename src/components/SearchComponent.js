import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterMovies, getMovies } from '../store/actions';

const SearchComponent = () => {

    const [entry,setEntry] = useState('');
    
    const dispatch = useDispatch();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (entry === '') {
                dispatch(getMovies(1));
            }
            else {
                dispatch(filterMovies(entry));
            }
        },750);

        return () => {
            clearTimeout(timeoutId);
        } // eslint-disable-next-line
    },[entry]);
   
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search movies..." value={entry} onChange={(e) => setEntry(e.target.value)}/>
                <i className="search icon"></i>
            </div>
        </div>
    );

}

export default SearchComponent;