import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/actions/index";
import MovieItemComponent from "./MovieItemComponent";
import Pagination from "./Pagination";
import SearchComponent from "./SearchComponent";
import { moviesSelector } from '../store/selectors/MovieSelector';

const MovieListComponent = () => {

  const dispatch = useDispatch();
  const allMovies = useSelector(moviesSelector);
  const movieCount = useSelector((state) => state.movies.movieCount);

  const [currentPage, setCurrentPage] = useState(1); // ON CLICK CHANGE CURRENT PAGE !!

  const fetchMovies = useCallback((page = 1) => dispatch(getMovies(page)), [dispatch,]);

  useEffect(() => {
    fetchMovies();
  }, []); // eslint-disable-line

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]); // eslint-disable-line

  const allMoviesRendered = allMovies.map((movie) => {
    return (
      <div style={{ float: "left" }} key={movie.id}>
        <MovieItemComponent movie={movie} />
      </div>
    );
  });

  return (
      <div style={{ margin: 15, marginLeft: 30, marginBottom: 100}}>
        <div style={{marginLeft: 500, marginBottom: 15}}>
          <SearchComponent/>
        </div>
        <div style={{overflow: 'hidden'}}> 
          {allMoviesRendered} 
        </div>
        <div>
          <Pagination totalMovies={movieCount} paginate={(pageNum) => setCurrentPage(pageNum)} style={{marginTop: 400}} />
        </div>
      </div>
  );
};

export default MovieListComponent;
