import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterMovies, getMovies } from '../../store/actions/index';

const SearchComponent = () => {

    const [entry,setEntry] = useState('');
    
    const dispatch = useDispatch();

    const debounce = (func) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {func.apply(this,args)},750);
        }
    }

    useEffect(() => {
        (debounce(() => {
            if (entry === '') {
                dispatch(getMovies());
            }
            else {
                dispatch(filterMovies(entry));
            }
        },750))(); // eslint-disable-next-line
    },[entry]);
   
    return (
        <div className="ui search" style={{float: 'left', marginLeft: 140}}>
            <div className="ui icon input" style={{width: 260}}>
                <input className="prompt" type="text" placeholder="Search movies..." value={entry} onChange={(e) => setEntry(e.target.value)}/>
                <i className="search icon"></i>
            </div>
        </div>
    );

}

export default SearchComponent;