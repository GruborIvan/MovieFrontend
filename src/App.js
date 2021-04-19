import React, { useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import Header from './components/Header'
import { useDispatch } from 'react-redux';
import { SaveToken } from './store/actions';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      dispatch(SaveToken());
    }
  });

  return (
    <div>
      <Router>
        <Header/>
        <Routes/>
      </Router>  
    </div>
  );
};

export default App;