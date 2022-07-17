import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.js';
import BottomNavbar from './Components/BottomNavbar/BottomNavbar'
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path='/portfolio-ryan-react/' element={<Home/>}/>
                        <Route path='/portfolio-ryan-react/About' element={<About/>}/>
                        <Route path='/portfolio-ryan-react/Contact' element={<Contact/>}/>
                    </Routes>
                </div>
                <BottomNavbar/>
            </Router>
        </div>
    );
}

export default App;