import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { ReactToMovie } from '../../store/actions';

const LikeDislikeComponent = ({movie}) => {

    let {pathname} = useLocation()
    const dispatch = useDispatch();

    return (<div style={{overflow: 'hidden',marginLeft: 50, marginTop: 10, marginBottom: 5}}>
        <button className="ui small green button" onClick={() => dispatch(ReactToMovie(movie.id,true,pathname))}> 
            <i className="hand point up icon"></i>
            {movie.likes}
        </button>
       
        <button className="ui small red button" style={{marginLeft: 10}} onClick={() => dispatch(ReactToMovie(movie.id,false,pathname))}> 
            <i className="hand point down icon"></i>
            {movie.dislikes}
        </button>
    </div>);
}

export default LikeDislikeComponent;