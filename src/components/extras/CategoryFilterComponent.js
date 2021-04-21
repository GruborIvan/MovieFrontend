import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterMoviesByGenre, GetGenres, getMovies } from '../../store/actions';
import { genreSelector } from '../../store/selectors/MovieSelector';

const CategoryFilterComponent = () => {

    const dispatch = useDispatch();

    const genres = useSelector(genreSelector);         // eslint-disable-next-line
    const [selectedVal,setSelectedVal] = useState([]);

    const setValue = (value) => {
        if (value === '--') {
            dispatch(getMovies());
            return;
        }
        genres.forEach(genre => {
            if (genre.genre_name === value) {
                dispatch(filterMoviesByGenre(genre.id))
                setSelectedVal(genre.genre_name);
            }
        });
    }

    const genresRendered = genres.map((genre) => {
        return <option key={genre.id}> {genre.genre_name} </option>
    });

    useEffect(() => {
        dispatch(GetGenres()); // eslint-disable-next-line
    },[])

    return (
        <div style={{float: 'left', backgroundColor: 'lightblue'}} className="ui compact menu">
            <h5 style={{marginTop: 10, marginLeft: 10, marginRight: 10}}> Filter movies by genre:  </h5>
            <input list="lst" placeholder=" Filter..." style={{width: 170}} onChange={(e) => setValue(e.target.value)}/>
            <datalist id="lst">
                <option key={'i3'}> -- </option>
                {genresRendered}
            </datalist>
        </div>
    );

}

export default CategoryFilterComponent;