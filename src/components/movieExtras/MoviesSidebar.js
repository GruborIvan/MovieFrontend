import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPopularMovies, getRelatedMovies } from '../../store/actions';
import { sidebarContentSelector } from '../../store/selectors/MovieSelector';

const MoviesSidebar = ({genre,currMovieId}) => {

    const dispatch = useDispatch()
    const movies = useSelector(sidebarContentSelector)

    useEffect(() => {
        if (genre !== undefined) {
          dispatch(getRelatedMovies(genre));  
        }  
        else {
          dispatch(getPopularMovies())
        }  // eslint-disable-next-line
    },[]);

    const moviesRendered = movies.slice(0,4).map(movie => {
        if (movie.id === currMovieId) return <div></div> 
        return (<div key={movie.id} style={{float: 'left'}}>
            <Link to={"/movies/" + movie.id}>
            <div className="image">
              <img
                src={movie.imageurl}
                alt="Img failed to load."
                style={{
                  width: 280,
                  height: 290,
                  paddingLeft: 10,
                  marginTop: 10,
                }}
              />
            </div>
            <div className="content" style={{ marginLeft: 15 }}>
              {movie.title}
              <div className="description" style={{width: 270}}>{movie.description}</div>
            </div>
          </Link>
        </div>)
    });

    return (<div style={{overflow: 'hidden',marginBottom: 25}}>
        {moviesRendered}
    </div>)
}

export default MoviesSidebar;