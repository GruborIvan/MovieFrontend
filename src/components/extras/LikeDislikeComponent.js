import React from 'react'

const LikeDislikeComponent = ({movieId}) => {
    return (<div style={{overflow: 'hidden',marginLeft: 30, marginTop: 10, marginBottom: 5}}>
        <button className="ui small green button"> 
            <i class="hand point up icon"></i>
        </button>
       
        <button className="ui small red button" style={{marginLeft: 80}}> 
            <i class="hand point down icon"></i>
        </button>
        
    </div>);
}

export default LikeDislikeComponent;