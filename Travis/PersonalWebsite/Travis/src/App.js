import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Mentors from './pages/Mentors';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import ProgramA from './pages/ProgramA';
import Pricing from './pages/Pricing';
import WhatWeProvide from './pages/WhatWeProvide';
import Register from './pages/Register'; 
import Blog from './pages/blog';
import Developers from './pages/Developers';
import './App.css';

function App() {
    const [isSticky, setIsSticky] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mentorsDropdownOpen, setMentorsDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 110);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMentorsDropdown = () => {
        setMentorsDropdownOpen(!mentorsDropdownOpen);
    };

    function toggleSearch() {
        setIsSearchOpen(!isSearchOpen);
    }

    function handleSearchChange(evt) {
        const value = evt.target.value;
        setSearchText(value);
    }

    return (
        <Router>
            <div>
                <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
                    <div className="logo">A*</div>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <button className="dropbtn">
                                Info About the Program
                            </button>
                            <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                                <Link to="/info/program-a">Program A</Link>
                                <Link to="/info/pricing">Pricing</Link>
                                <Link to="/info/what-we-provide">What we provide our students</Link>
                            </div>
                        </div>
                        <div className="dropdown" onMouseEnter={toggleMentorsDropdown} onMouseLeave={toggleMentorsDropdown}>
                            <button className="dropbtn">Mentors</button>
                            <div className={`dropdown-content ${mentorsDropdownOpen ? 'show' : ''}`}>
                                <Link to="/mentors">Mentors</Link>
                                <Link to="/mentors/developers">Developers</Link>
                            </div>
                        </div>
                        <Link to="/about">About Us</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/blog">Blog</Link>
                    </div>
                    <div className="search-icon" onClick={toggleSearch}>🔍</div>
                </div>
                {isSearchOpen && (
                    <div className="search-bar">
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                        />
                    </div>
                )}
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/info/program-a" element={<ProgramA />} />
                        <Route path="/info/pricing" element={<Pricing />} />
                        <Route path="/info/what-we-provide" element={<WhatWeProvide />} />
                        <Route path="/mentors" element={<Mentors />} />
                        <Route path="/mentors/developers" element={<Developers />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
