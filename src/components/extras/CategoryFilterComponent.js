import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetGenres, getMovies } from '../../store/actions';
import { genreSelector } from '../../store/selectors/MovieSelector';

const CategoryFilterComponent = () => {

    const dispatch = useDispatch();

    const genres = useSelector(genreSelector);

    const setValue = (value) => {
        dispatch(getMovies({genre: value}));
    }

    const genresRendered = genres.map((genre) => {
        return <option key={genre.id} value={genre.id}> {genre.genre_name} </option>
    });

    useEffect(() => {
        dispatch(GetGenres()); // eslint-disable-next-line
    },[])

    return (
        <div style={{float: 'left', backgroundColor: 'lightblue',marginTop: 5}} className="ui compact menu">
            <h5 style={{marginTop: 15, marginLeft: 10, marginRight: 10}}> Filter movies by genre:  </h5>
            <select placeholder=" Filter..." style={{width: 170, marginRight: 20}} onChange={(e) => setValue(e.target.value)}>
                {genresRendered}
            </select>
            <button className="ui small red button" onClick={() => dispatch(getMovies())}> Clear filter </button>
        </div>
    );

}

export default CategoryFilterComponent;