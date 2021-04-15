import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes';
import Header from './components/Header'

const App = () => {

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