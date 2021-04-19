import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/actions/index";
import MovieItemComponent from "./MovieItemComponent";
import Pagination from "./Pagination";

const MovieListComponent = () => {
  // States for pagination..
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movies);
  const movieCount = useSelector((state) => state.movieCount);

  const [currentPage, setCurrentPage] = useState(1); // ON CLICK CHANGE CURRENT PAGE !!

  const fetchMovies = useCallback((page = 1) => dispatch(getMovies(page)), [
    dispatch,
  ]);

  const changePage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    fetchMovies();
  }, []); // eslint-disable-line

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]); // eslint-disable-line


  console.log(allMovies)

  const allMoviesRendered = allMovies.map((movie) => {
    return (
      <div style={{ float: "left" }} key={movie.id}>
        <MovieItemComponent movie={movie} />
      </div>
    );
  });

  return (
      <div style={{ margin: 40, marginLeft: 20, marginBottom: 100}}>

        <div style={{overflow: 'hidden'}}> 
          {allMoviesRendered} 
        </div>
        
        <div>
          <Pagination totalMovies={movieCount} paginate={changePage} style={{marginTop: 400}} />
        </div>
      </div>
  );
};

export default MovieListComponent;
