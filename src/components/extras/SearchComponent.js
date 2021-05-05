import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/actions/index';
import debounce from 'lodash/debounce';

const SearchComponent = () => {

    const [entry,setEntry] = useState('');
    
    // eslint-disable-next-line
    const debounceSearch = useCallback(debounce(entry => dispatch(getMovies({title: entry})),750),[]);
    
    const dispatch = useDispatch();

    useEffect(() => {
        debounceSearch(entry);  // eslint-disable-next-line
    },[entry]);
   
    return (
        <div className="ui search" style={{float: 'left', marginLeft: 60,marginTop: 10}}>
            <div className="ui icon input" style={{width: 260}}>
                <input className="prompt" type="text" placeholder="Search movies..." value={entry} onChange={(e) => setEntry(e.target.value)}/>
                <i className="search icon"></i>
            </div>
        </div>
    );

}

export default SearchComponent;