import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (<div style={{ backgroundColor: 'blue', height: 50, width: 1800, overflow: 'hidden' }} >  
        <div style={{ marginLeft: 500, marginTop: 5 }}>
            <Link to="/movies" className="ui primary button"> All Movies </Link>
            <Link to="/addmovie" className="ui secondary button"> Add Movie </Link>
        </div>
    </div>);
};

export default Header;