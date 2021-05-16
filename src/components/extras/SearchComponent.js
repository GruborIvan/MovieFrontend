import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies, performElasticSearch } from '../../store/actions/index';
import debounce from 'lodash/debounce';

const SearchComponent = () => {

    const [elasticSearch,setElasticSearch] = useState(false);
    const [entry,setEntry] = useState('');
    
    // eslint-disable-next-line
    const debounceSearch = useCallback(debounce(entry => dispatch(getMovies({title: entry})),750),[]);  // eslint-disable-next-line
    const debounceElasticSearch = useCallback(debounce(entry => dispatch(performElasticSearch({q : entry})),750),[]);
    
    const dispatch = useDispatch();

    useEffect(() => {
        elasticSearch ? debounceElasticSearch(entry) : debounceSearch(entry);  // eslint-disable-next-line
    },[entry]);
   
    return (
        <div className="ui search" style={{float: 'left', marginLeft: 60,marginTop: 10}}>
            <div className="ui icon input" style={{width: 260}}>
                <input className="prompt" type="text" placeholder="Search movies..." value={entry} onChange={(e) => setEntry(e.target.value)}/>
                <i className="search icon"></i>
            </div>
            <div className="ui toggle checkbox" style={{marginLeft: 20}}>
                <input type="checkbox" name="public" onChange={(e) => setElasticSearch(e.target.value)} value={elasticSearch}/>
                <label> Elastic search </label>
            </div>
        </div>
    );

}

export default SearchComponent;