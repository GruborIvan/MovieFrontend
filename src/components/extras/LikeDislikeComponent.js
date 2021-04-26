import React from 'react'
import { useDispatch } from 'react-redux';
import { ReactToMovie } from '../../store/actions';

const LikeDislikeComponent = ({movie}) => {

    const dispatch = useDispatch();

    return (<div style={{overflow: 'hidden',marginLeft: 50, marginTop: 10, marginBottom: 5}}>
        <button className="ui small green button" onClick={() => dispatch(ReactToMovie(movie.id,'like'))}> 
            <i className="hand point up icon"></i>
            {movie.numberOfLikes}
        </button>
       
        <button className="ui small red button" style={{marginLeft: 10}} onClick={() => dispatch(ReactToMovie(movie.id,'dislike'))}> 
            <i className="hand point down icon"></i>
            {movie.numberOfDislikes}
        </button>
    </div>);
}

export default LikeDislikeComponent;