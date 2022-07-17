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
            <Navbar />
            <div className="content">
                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/About' element={<About/>}/>
                        <Route path='/Contact' element={<Contact/>}/>
                    </Routes>
                </Router>
            </div>
            <BottomNavbar />
        </div>
    );
}

export default App;