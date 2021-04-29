import React from 'react'
import { useDispatch } from 'react-redux';
import { AddToMovieList, markMovieAsWatched, RemoveFromMovieList } from '../../store/actions';

const MovieActionsComponent = ({movie,entryNum}) => {

    const dispatch = useDispatch();

    const btnDisable = localStorage.getItem('screen') === 'movielist' ? 'disabled' : ''; 

    return  (
        <div style={{overflow: "hidden"}}>
            <div style={{float: "left"}}> 
              {movie.watched === true
              ? <p style={{marginTop: 12,marginLeft: 40,marginRight: 90}}> Watched! </p> 
              : <div> <button className="ui mini green button" style={{marginTop: 7,marginLeft: 10,marginRight: 10}} onClick={() => dispatch(markMovieAsWatched(movie.id))}> Mark as watched </button> 
            </div>}
            </div>
            <div style={{float: "left"}}> 
              {movie.is_in_watchlist === true
              ? <button className={"ui red mini button " + btnDisable} style={{marginTop: 7}}
                  onClick={() => dispatch(RemoveFromMovieList(entryNum))}> 
                <i className="trash alternate icon"></i>
                Remove 
              </button>
              : 
              <button className="ui orange mini button" style={{marginTop: 7,marginLeft: 10}} onClick={() => dispatch(AddToMovieList(movie.id))}> 
                Add to Watchlist
                <i className="plus square icon"></i> 
              </button> 
              }
            </div>
        </div>
    )
}

export default MovieActionsComponent;