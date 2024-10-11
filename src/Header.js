import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import the react-scroll Link
import './Header.css'; // Import your CSS file for the header

const Header = () => {
    // State to handle the menu open/close in mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
    };

    return (
        <header className="header">
            <h1 className="logo">SY</h1>
            
            {/* Hamburger menu for mobile */}
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Navbar */}
            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    {/* Scroll to Skills section */}
                    <li>
                        <Link 
                            to="skills-section" 
                            smooth={true} 
                            duration={500}
                            onClick={() => setIsMenuOpen(false)} // Close menu on link click
                        >
                            Skills
                        </Link>
                    </li>

                    {/* Scroll to Education section */}
                    <li>
                        <Link 
                            to="education-section" 
                            smooth={true} 
                            duration={500}
                            onClick={() => setIsMenuOpen(false)} // Close menu on link click
                        >
                            Education
                        </Link>
                    </li>

                    {/* LinkedIn link opens in a new tab */}
                    <li>
                        <a 
                            href="https://www.linkedin.com/in/shaurya-yaduvanshi-43933b287/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)} // Close menu on link click
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;