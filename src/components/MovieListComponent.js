import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/actions/index";
import MovieItemComponent from "./MovieItemComponent";
import Pagination from "./extras/Pagination"
import SearchComponent from './extras/SearchComponent'
import { movieCountSelector, moviesSelector } from '../store/selectors/MovieSelector';
import CategoryFilterComponent from "./extras/CategoryFilterComponent";
import MoviesSidebar from "./movieExtras/MoviesSidebar";

const MovieListComponent = () => {

  const dispatch = useDispatch();
  const allMovies = useSelector(moviesSelector);
  const movieCount = useSelector(movieCountSelector);

  const [currentPage, setCurrentPage] = useState(1); // ON CLICK CHANGE CURRENT PAGE !!

  const fetchMovies = useCallback((page = 1) => dispatch(getMovies({page: page})), [dispatch]);

  useEffect(() => {
    localStorage.setItem('screen','movielist')
    fetchMovies();
  }, []); // eslint-disable-line

  useEffect(() => {
    localStorage.setItem('screen','movielist')
    fetchMovies(currentPage);
  }, [currentPage]); // eslint-disable-line

  const allMoviesRendered = allMovies.map((movie) => {
    return (
      <div style={{ float: "left" }} key={movie.id}>
        <MovieItemComponent movie={movie} />
      </div>
    );
  });

  return (<div style={{overflow: "hidden", backgroundColor: 'black'}}>
      <div style={{ margin: 15, marginBottom: 100, float: "left",width: 1400}}>
          <div style={{marginBottom: 15, overflow: "hidden", backgroundColor: 'lightblue', height: 60}}>
            <CategoryFilterComponent/>
            <SearchComponent/>
          </div>
          <br/><br/>

        <div style={{overflow: 'hidden'}}> 
          {allMoviesRendered} 
        </div>

        <div style={{marginTop: 40}}>
          <Pagination totalMovies={movieCount} paginate={(pageNum) => setCurrentPage(pageNum)} />
        </div>
        <div style={{marginTop: 80}}>
          <h1 style={{color: "white"}}> Top rated movies: </h1>
        </div>

        <MoviesSidebar/>

      </div>
      </div>
  );
};

export default MovieListComponent;
