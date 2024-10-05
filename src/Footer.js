import React from 'react';
import './Footer.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="bubbles">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="bubble"
                        style={{
                            "--size": `${2 + Math.random() * 3}rem`,
                            "--distance": `${6 + Math.random() * 4}rem`,
                            "--position": `${Math.random() * 100}%`,
                            "--time": `${3 + Math.random() * 2}s`,
                            "--delay": `${Math.random() * -2}s`,
                        }}
                    />
                ))}
            </div>
            <div className="content">
                <div>
                    <div>
                        <b>Reach Out to me!</b>
                        <p></p>
                        <p>Full Stack Developer </p>
                        <div className="location">
                            <span className="location-icon">📍</span> Jaipur, India
                        </div>
                    </div>

                    <div className="footer-social">
                        <a href="mailto:your-email@example.com"><FaEnvelope /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>

                <div className="footer-image">
                    <img
                        src="https://your-profile-image-link.jpg"
                        alt="Profile"
                    />
                </div>
            </div>

            <svg style={{ position: 'fixed', top: '100vh' }}>
                <defs>
                    <filter id="blob">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="blob"
                        />
                    </filter>
                </defs>
            </svg>
        </footer>
    );
};

export default Footer;