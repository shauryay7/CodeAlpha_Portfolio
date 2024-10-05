import React from 'react';
import './SkillsSection.css';
// Import icons from FontAwesome or DevIcons
import { FaPython, FaJava, FaCode, FaReact, FaJsSquare, FaCss3Alt } from 'react-icons/fa'; // Added React, JavaScript, and CSS icons
import { SiCplusplus, SiReact } from 'react-icons/si'; // C++ and React Native icons from DevIcons

const SkillsSection = () => {
    return (
        <section id="skills-section" className="skills-section">
            <h2>Skills</h2>
            <h3 className="para">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h3>
            <div className="container">
                <div className="image">
                    <img src="https://i.giphy.com/H7f5ZGjvKXBaLbBigO.webp"
                         alt="Coding" className="hero-image"/>
                </div>
                <div className="skills-container">
                    {/* Python */}
                    <div className="skill-item">
                        <FaPython className="skill-icon"/>
                        <p>Python</p>
                    </div>
                    {/* Java */}
                    <div className="skill-item">
                        <FaJava className="skill-icon"/>
                        <p>Java</p>
                    </div>
                    {/* C */}
                    <div className="skill-item">
                        <FaCode className="skill-icon"/>
                        <p>C</p>
                    </div>
                    {/* C++ */}
                    <div className="skill-item">
                        <SiCplusplus className="skill-icon"/>
                        <p>C++</p>
                    </div>
                    {/* React */}
                    <div className="skill-item">
                        <FaReact className="skill-icon"/>
                        <p>React.js</p>
                    </div>
                    {/* JavaScript */}
                    <div className="skill-item">
                        <FaJsSquare className="skill-icon"/>
                        <p>JavaScript</p>
                    </div>
                    {/* CSS */}
                    <div className="skill-item">
                        <FaCss3Alt className="skill-icon"/>
                        <p>CSS</p>
                    </div>
                    {/* React Native */}
                    <div className="skill-item">
                        <SiReact className="skill-icon"/>
                        <p>React Native</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;