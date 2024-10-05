// src/Header.js
import React from 'react';
import { Link } from 'react-scroll'; // Import the react-scroll Link
import './Header.css'; // Import your CSS file for the header

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">SY</h1>
            <nav className="navbar">
                <ul>
                    {/* Scroll to Skills section */}
                    <li>
                        <Link to="skills-section" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>

                    {/* Scroll to Education section */}
                    <li>
                        <Link to="education-section" smooth={true} duration={500}>
                            Education
                        </Link>
                    </li>

                    {/* LinkedIn link opens in a new tab */}
                    <li>
                        <a href="https://www.linkedin.com/in/shaurya-yaduvanshi-43933b287/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;