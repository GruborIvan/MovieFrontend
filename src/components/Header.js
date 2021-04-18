import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { LogOut } from '../store/actions';

const Header = () => {

    const isLoggedIn = useSelector((state) => state.token);
    const dispatch = useDispatch();

    const onUserLogOut = () => {
        localStorage.setItem('token','');
        localStorage.setItem('refresh','');
        dispatch(LogOut());
    };

    return (<div style={{ backgroundColor: 'blue', height: 54, width: 1800, overflow: 'hidden' }} >
            <div style={{textAlign: 'center', marginTop: 10}}>
                <Link to="/movies" className="ui inverted blue button"> All Movies </Link>
                <Link to="/addmovie" className="ui inverted blue button"> Add Movie </Link>

                { isLoggedIn === ''
                    ? <Link to="" className="ui inverted green button" style={{marginLeft: 380}}> Log In </Link>
                    : <Link to="" onClick={onUserLogOut} className="ui inverted red button" style={{marginLeft: 380}}> Log Out </Link>
                }
            </div>
    </div>);
};

export default Header;