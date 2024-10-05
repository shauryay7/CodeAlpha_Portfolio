// src/Header.js
import React from 'react';
import './Header.css'; // Import your CSS file for the header

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">SY</h1>
            <nav className="navbar">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;