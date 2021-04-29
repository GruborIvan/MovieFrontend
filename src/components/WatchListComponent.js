import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetMyMovieList } from '../store/actions';
import { moviesSelector } from '../store/selectors/MovieSelector';
import MovieItemComponent from './MovieItemComponent';

const WatchListComponent = () => {

    const dispatch = useDispatch()
    const watchList = useSelector(moviesSelector)

    useEffect(() => {
      localStorage.setItem('screen','watchlist')
      dispatch(GetMyMovieList())  // eslint-disable-next-line
    },[])

    const allMoviesRendered = watchList.map((movie) => {
        return (
          <div style={{ float: "left" }} key={movie.id}>
            <MovieItemComponent movie={movie.movie} entryNum={movie.id} />
          </div>
        );
    });

    return (<div>
        <h1 style={{marginLeft: 500,marginTop: 15,marginBottom: 15}}> My Watchlist </h1>
        {allMoviesRendered}
    </div>)
}

export default WatchListComponent;