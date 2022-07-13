import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeComponent from '../Components/Home/Home-components';
import SearchComponent from '../Components/Search/Search-component';
const RouterComponent = () => {
    return ( 
        <Router>
            <Routes>
                <Route  path="/" element={<HomeComponent/>} />
                <Route exact path="/search" element={<SearchComponent/>} />
            </Routes>
        </Router>
     );
}
 
export default RouterComponent;