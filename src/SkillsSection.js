import React from 'react';
import './SkillsSection.css';
// Import icons from FontAwesome or DevIcons
import { FaPython, FaJava, FaCode } from 'react-icons/fa'; // FaCode can be used as a generic C icon.

const SkillsSection = () => {
    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills-container">
                {/* Python */}
                <div className="skill-item">
                    <FaPython className="skill-icon" />
                    <p>Python</p>
                </div>
                {/* Java */}
                <div className="skill-item">
                    <FaJava className="skill-icon" />
                    <p>Java</p>
                </div>
                {/* C */}
                <div className="skill-item">
                    <FaCode className="skill-icon" />
                    <p>C</p>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;