import React from 'react'

const Loader = () => {
    return (
        <div className="ui segment" style={{marginTop: 50,height:200, width: 600}}>
            <div className="ui active dimmer">
                <div className="ui huge text loader">Loading</div>
            </div>
        </div>
    );
}

export default Loader;