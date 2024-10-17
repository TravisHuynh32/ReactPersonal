import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import './App.css';

function App() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 110);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Router>
            <div>
                <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Me</Link>
                    </div>
                </div>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
