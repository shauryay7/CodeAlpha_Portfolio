// src/EducationSection.js
import React from 'react';
import './EducationSection.css';

const EducationSection = () => {
    return (
        <>
            <div className="title">
                <h1>EDUCATION</h1>
            </div>
            <div className="education-section">
                <div className="education-item">
                    <h3>B.Tech | Computer Science and Programming</h3>
                    <p>SRM University, Chennai</p>
                    <p>Expected Graduation: July 2027</p>
                    <ul>
                        <li>Completed online course on Programming Using Python and C++.</li>
                        <li>Received industrial training focused on Intel technologies.</li>
                        <li>Specialization in Artificial Intelligence and Machine Learning.</li>
                    </ul>
                </div>
                <div className="education-item">
                    <h3>High School Diploma</h3>
                    <p>Delhi Public School, Jaipur</p>
                    <p>Graduated: June 2023</p>
                </div>
            </div>
        </>
    );
};

export default EducationSection;