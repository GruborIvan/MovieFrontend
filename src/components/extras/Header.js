import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { LogOut } from '../../store/actions';

const Header = () => {

    const isLoggedIn = useSelector((state) => state.token);
    const dispatch = useDispatch();

    const onUserLogOut = () => {
        localStorage.setItem('token','');
        localStorage.setItem('refresh','');
        dispatch(LogOut());
    };

    return (<div style={{ backgroundColor: 'blue', height: 54, width: 1800, overflow: 'hidden' }} className="ui container">
            <div style={{textAlign: 'center', marginTop: 10}}>
                <Link to="/movies" className="ui inverted blue button"> 
                    <i className="list alternate icon"></i>
                    All Movies 
                </Link>
                <Link to="/addmovie" className="ui inverted blue button" style={{marginLeft: 10}}> 
                    <i className="plus icon"></i>
                    Add Movie 
                </Link>
                <Link to="/watchlist" className="ui inverted orange button" style={{marginLeft: 40}}> 
                    <i className="video icon"></i>
                    WatchList 
                </Link>

                { isLoggedIn === '' 
                    ? <Link to="" className="ui inverted green button" style={{marginLeft: 180}}> Log In </Link>
                    : <Link to="" onClick={onUserLogOut} className="ui inverted red button" style={{marginLeft: 180}}> 
                        <i className="sign out alternate icon"></i>
                        Log Out 
                    </Link>
                }
            </div>
    </div>);
};

export default Header;