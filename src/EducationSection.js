import React from 'react';
import './EducationSection.css';

const EducationSection = () => {
    return (
        <section id="education-timeline">
            <h1>Education Timeline</h1>
            <div className="education-card-wrapper">
                <div className="education-card education-card--step1">
                    <div className="head">
                        <div className="number-box">
                            <span>01</span>
                        </div>
                        <h2><span className="small">High School Diploma</span> Delhi Public School, Jaipur</h2>
                    </div>
                    <div className="body">
                        <p>Graduated: June 2023</p>
                    </div>
                </div>

                <div className="education-card education-card--step2">
                    <div className="head">
                        <div className="number-box">
                            <span>02</span>
                        </div>
                        <h2><span className="small">B.Tech in Computer Science and Programming</span> SRM University, Chennai</h2>
                    </div>
                    <div className="body">
                        <p>Expected Graduation: July 2027</p>
                        <ul>
                            <li>Specialization in Artificial Intelligence and Machine Learning.</li>
                            <li>Completed online courses on Programming Using Python and C++.</li>
                            <li>Received industrial training focused on Intel technologies.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;